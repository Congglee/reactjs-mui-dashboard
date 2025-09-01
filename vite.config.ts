import { reactRouter } from '@react-router/dev/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import devtoolsJson from 'vite-plugin-devtools-json'

export default defineConfig({
  plugins: [devtoolsJson(), reactRouter(), tsconfigPaths()],
  css: {
    devSourcemap: true
  },
  server: {
    port: 3000
  },
  preview: {
    port: 3000
  }
})
