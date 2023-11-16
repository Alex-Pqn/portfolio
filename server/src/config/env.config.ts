import dotenv from 'dotenv'
import path from 'path'
import { Environment as EnvironmentT } from 'types/Environment'

const envPath = path.resolve(process.cwd(), '.env')
dotenv.config({ path: envPath })
console.log(`Loading environment variables from: ${envPath}`)

export const Environment: EnvironmentT = {
  port: process.env.PORT || '',
  isProd: process.env.NODE_ENV === 'production',
  baseUrl: process.env.BASE_URL || '',

  email: {
    host: process.env.EMAIL_HOST || '',
    port: parseInt(process.env.EMAIL_PORT || '') || 0,
    address: process.env.EMAIL_ADDRESS || '',
    password: process.env.EMAIL_PASSWORD || '',
    secure: process.env.EMAIL_SECURE === 'true',
    tlsServername: process.env.EMAIL_TLS_SERVERNAME || '',
  },
}
