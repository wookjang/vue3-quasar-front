// src/boot/pinia.js
import { boot } from 'quasar/wrappers'
import { createPinia } from 'pinia'
import { initializeStores } from 'src/store'
import piniaPersistedstate from 'pinia-plugin-persistedstate'

export default boot(({ app }) => {
  const pinia = createPinia()
  pinia.use(piniaPersistedstate) //
  app.use(pinia)

  // 모든 store 초기화 (전역적으로 1회)
  initializeStores()
})
