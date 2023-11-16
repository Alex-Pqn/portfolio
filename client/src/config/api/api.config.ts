import Environment from '../Environment'

export const isProduction = Environment.PROD
export const getApi = () => Environment.VITE_API_PROXY
