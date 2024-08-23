import { useToastStore } from '@/stores/toast'
import axios from 'axios'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { parse } from 'content-disposition-header'
import { useRoute, useRouter } from 'vue-router'

export const useApi = (url: string, needCredential?: boolean) => {
  const config: AxiosRequestConfig = {
    baseURL: url,
    timeout: 300000, // 300s / 5m
    headers: {
      Accept: 'application/json',
      // 'Content-Type': 'application/json',
      // 'X-Requested-With': 'XMLHttpRequest',
    },
  }

  if (needCredential) {
    axios.defaults.withCredentials = true
  }

  const toast = useToastStore()
  const route = useRoute()
  const router = useRouter()

  const REQUEST = async <T>(
    conf: AxiosRequestConfig,
    retryIfCsrfError = true,
  ): Promise<T> => {
    return new Promise((resolve, reject) => {
      axios
        .request({ ...config, ...conf })
        .then((response) => {
          resolve(response.data)
        })
        .catch(async (error) => {
          if (isCsrfTokenError(error) && retryIfCsrfError) {
            try {
              await GET('/sanctum/csrf-cookie')
              const response = await REQUEST<T>(conf, false)
              resolve(response)
            } catch (error) {
              reject(error)
            }
          } else {
            console.error('[API]', error)
            handleErrors(error)
            reject(error)
          }
        })
    })
  }
  const GET = <T>(url: string, params = {}) => {
    return REQUEST<T>({ method: 'get', url, params })
  }
  const POST = <T>(url: string, data: object = {}) => {
    return REQUEST<T>({ method: 'post', url, data })
  }
  const PUT = <T>(url: string, data: object = {}) => {
    return REQUEST<T>({ method: 'put', url, data })
  }
  const DELETE = <T>(url: string, data = {}) => {
    return REQUEST<T>({ method: 'delete', url, data })
  }
  const POSTFORMDATA = <T>(url: string, formData: FormData) => {
    return REQUEST<T>({
      headers: { ...config.headers, 'Content-Type': 'multipart/form-data' },
      method: 'post',
      url,
      data: formData,
    })
  }
  type ApiDownload = (
    url: string,
    params?: object,
    data?: object,
    method?: 'get' | 'post',
  ) => Promise<void>
  const DOWNLOAD: ApiDownload = async (url, params, data, method = 'get') => {
    const response = await axios.request({
      ...config,
      url,
      method,
      responseType: 'arraybuffer',
      headers: undefined,
      params: params,
      data: data,
    })

    downloadFile(response)
  }

  const downloadFile = (response: AxiosResponse) => {
    // laravel config/cors.php need to set Content-Disposition to exposed_headers
    const parseResult = parse(response.headers['content-disposition'])

    const href = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.setAttribute('href', href)
    link.setAttribute('download', parseResult.parameters.filename)
    document.body.appendChild(link)
    link.click()
  }

  const onError = {
    unauthorized: () => {
      if (
        route.name === 'login' ||
        route.name === 'request password' ||
        route.name === 'set password'
      ) {
        return
      }

      //   auth.$reset()
      const path = route.fullPath.substring(1)
      const query = path !== '' ? { r: path } : undefined
      router.replace({ name: 'login', query })
    },
    maintenance: () => {
      router.replace({ name: 'maintenance' })
    },
    forbidden: () => {
      //   page.showForbiddenError()
    },
    notFound: () => {
      //   page.showNotFoundError()
    },
    validationFailed: () => {
      toast.add('Terdapat kesalahan pada data yang dikirim')
      setTimeout(() => {
        const errorMessage = document.querySelector('.error-message')
        errorMessage?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    },
    tooManyRequest: () => {
      toast.add(
        'Terlalu banyak melakukan request, silakan tunggu beberapa menit sebelum mencoba kembali',
      )
    },
    internalServerError: () => {
      toast.add('Error pada sisi server. Hubungi IT Enchan.')
    },
    networkError: () => {
      toast.add('Tidak terhubung dengan internet')
    },
  }

  /* https://github.com/axios/axios#handling-errors */
  const handleErrors = (error: unknown): void => {
    // conf: AxiosRequestConfig,
    if (!axios.isAxiosError(error)) {
      /**
       * Not axios error
       * Something happened in setting up the request that triggered an Error
       */
      console.error('[NotAxiosError]', error)
      return
    }

    if (error.response) {
      /**
       * The request was made and the server responded with a
       * status code that falls out of the range of 2xx
       */
      switch (error.response.status) {
        case 401:
          onError.unauthorized()
          break
        case 403:
          onError.forbidden()
          break
        case 404:
          onError.notFound()
          break
        case 405:
          onError.internalServerError()
          break
        case 422:
          onError.validationFailed()
          break
        case 429:
          onError.tooManyRequest()
          break
        case 500:
          onError.internalServerError()
          break
        case 503:
          onError.maintenance()
          break
        default:
          break
      }
      if (error.message === 'Network Error') {
        onError.networkError()
      }
      console.error('[Axios error]', error)
      return
    }

    /**
     * The request was made but no response was received.
     * `error.request` is an instance of XMLHttpRequest
     * in the browser and an instance of
     * http.ClientRequest in node.js
     */
    if (error.request) {
      console.error('[API] Axios error but no response', error)
    }
    return
  }

  const isNeedPasswordConfirmation = (error: unknown): boolean => {
    if (
      axios.isAxiosError(error) &&
      (error.response?.data.message === 'Password confirmation required.' ||
        error.response?.status === 423)
    ) {
      return true
    }

    return false
  }

  const isUnprocessableEntity = (error: unknown): boolean => {
    if (axios.isAxiosError(error) && error.response?.status === 422) {
      return true
    }

    return false
  }

  const formErrors = (error: unknown): FormError => {
    if (axios.isAxiosError(error) && error.response?.data.errors) {
      return error.response.data.errors
    }

    return {}
  }

  const isCsrfTokenError = (error: unknown): boolean => {
    return axios.isAxiosError(error) && error.response?.status === 419
  }

  return {
    GET,
    POST,
    DELETE,
    PUT,
    POSTFORMDATA,
    DOWNLOAD,
    config,
    formErrors,
    isNeedPasswordConfirmation,
    isUnprocessableEntity,
  }
}
