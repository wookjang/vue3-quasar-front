// src/boot/pinia.js
import { boot } from 'quasar/wrappers'
import { createPinia } from 'pinia'
import { initializeStores } from 'src/store'

export default boot(({ app }) => {
  const pinia = createPinia()
  app.use(pinia)

  // 모든 store 초기화 (전역적으로 1회)
  initializeStores()
})
