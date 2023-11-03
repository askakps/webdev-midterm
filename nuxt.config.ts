import { resolve } from 'path'

export default defineNuxtConfig({
  srcDir: 'src/',
  alias: {
    '@': resolve(__dirname, './src'),
  },
  css: ['~/assets/scss/main.scss'],
  app: {
    head: {
      title: 'Twitter App',
    }
  }
})
