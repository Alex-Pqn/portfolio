import { Environment } from './env.config'

export const corsAllowedOrigins = Environment.isProd
  ? ["'self'", 'https://fonts.googleapis.com']
  : ["'self'", 'http://localhost:5173', 'https://fonts.googleapis.com']
