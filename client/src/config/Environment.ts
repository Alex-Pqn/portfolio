import { Environment as EnvironmentT } from '@/@types/Environment'

const Environment: EnvironmentT = {
  PROD: import.meta.env.PROD,
  DEV: import.meta.env.DEV,
  MODE: import.meta.env.MODE,
  BASE_URL: import.meta.env.BASE_URL,
  SSR: import.meta.env.SSR,
  VITE_API_PROXY: import.meta.env.VITE_API_PROXY,
  VITE_API_URL: import.meta.env.VITE_API_URL,
}

export default Environment
