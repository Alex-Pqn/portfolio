import dotenv from 'dotenv'
import path from 'path'

const envPath = path.resolve(process.cwd(), '.env')
dotenv.config({ path: envPath })
console.log(`Loading environment variables from: ${envPath}`)

export const config = {
  port: process.env.PORT,
  baseUrl: process.env.BASE_URL,

  email: {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    address: process.env.EMAIL_ADDRESS,
    password: process.env.EMAIL_PASSWORD,
  },
}
