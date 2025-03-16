import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { name } from "./package.json"

export default defineConfig(() => {
  return {
    plugins: [vue()],
    define: {
      __APP_NAME__: JSON.stringify(name),
    },
  }
})
