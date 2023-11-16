import * as path from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  process.env = loadEnv(mode, process.cwd(), '')

  return defineConfig({
    server: process.env.PROD
      ? {}
      : {
          proxy: {
            '/api/v1': {
              target: process.env.VITE_API_URL,
            },
          },
        },
    plugins: [react()],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
  })
}
