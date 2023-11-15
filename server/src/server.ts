const http = require('http')
const app = require('./app')
import { config } from './config/config'

//defined the port of the server
const normalizePort = (val: string) => {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    return val
  }
  if (port >= 0) {
    return port
  }
  return false
}
const port = normalizePort(config.port || '4200')
app.set('port', port)

//errors manager
const errorHandler = (error: { syscall: string; code: any }) => {
  if (error.syscall !== 'listen') {
    throw error
  }
  const address = server.address()
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.')
      process.exit(1)
      break
    default:
      throw error
  }
}
//create nodeJS server
const server = http.createServer(app)

//call errors manager
server.on('error', errorHandler)

//listener manager
server.on('listening', () => {
  const address = server.address()
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port
  console.log('Listening on ' + bind)
})

//create event listener on the specified port
server.listen(port)
