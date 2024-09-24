import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv, UserConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }): UserConfig => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  const version = process.env.npm_package_version as string

  return {
    plugins: [vue()],
    server: {
      host: process.env.VITE_SERVER_HOST ?? 'localhost',
      port: Number(process.env.VITE_SERVER_PORT ?? 5173),
      https: process.env.VITE_SERVER_HTTPS_PATH_CERT
        ? {
            cert: process.env.VITE_SERVER_HTTPS_PATH_CERT,
            key: process.env.VITE_SERVER_HTTPS_PATH_KEY,
            ciphers: process.env.VITE_SERVER_HTTPS_CIPHERS,
          }
        : undefined,
    },
    define: {
      __APP_VERSION__: JSON.stringify(version),
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
