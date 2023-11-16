export interface Environment {
  PROD: boolean
  DEV: boolean
  MODE: string
  BASE_URL: string
  SSR: boolean
  VITE_API_PROXY: string
  VITE_API_URL: string
}
