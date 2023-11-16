export interface Environment {
  port: string
  isProd: boolean
  baseUrl: string

  email: {
    host: string
    port: number
    address: string
    password: string
    tlsServername: string
    secure: boolean
  }
}
