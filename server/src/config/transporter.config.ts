import { Environment } from './env.config'

export const transporterOptions = {
  host: Environment.email.host,
  port: Environment.email.port,
  secure: Environment.email.secure,
  tls: {
    servername: Environment.email.tlsServername,
  },
  auth: {
    user: Environment.email.address,
    pass: Environment.email.password,
  },
}
