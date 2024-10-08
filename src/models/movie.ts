import useApiMaze from '@/functions/api-maze'
import { ref } from 'vue'

export function useMovieSchedule(maxMovie = 8) {
  const api = useApiMaze()
  const loading = ref(false)
  const movies = ref<MoviceSchedule[]>([])

  const getData = async (apiParams: object) => {
    loading.value = true
    try {
      const response = await api.GET<MoviceSchedule[]>(
        'schedule/web',
        apiParams,
      )
      movies.value = response.slice(0, maxMovie)
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    movies,
    getData,
  }
}
