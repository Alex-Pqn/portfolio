import http from 'http'

export function terminate(
  server: http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>,
  options = { coredump: false, timeout: 500 }
) {
  const exit = (code: number | undefined) => {
    options.coredump ? process.abort() : process.exit(code)
  }

  const shutdown = () => {
    if (server.listening) {
      server.close(() => {
        console.log('Server closed')
        exit(0)
      })
    } else {
      exit(0)
    }
  }

  return () => (err: { message: any; stack: any }) => {
    if (err && err instanceof Error) {
      console.error(err.message, err.stack)
    }

    shutdown()

    setTimeout(() => {
      console.log('Forcing server termination')
      exit(1)
    }, options.timeout).unref()
  }
}

export const addProcessListeners = (server: http.Server) => {
  const exitHandler = terminate(server, { coredump: false, timeout: 500 })
  process.on('uncaughtException', () => exitHandler())
  process.on('unhandledRejection', () => exitHandler())
  process.on('SIGTERM', () => exitHandler())
  process.on('SIGINT', () => exitHandler())
}
