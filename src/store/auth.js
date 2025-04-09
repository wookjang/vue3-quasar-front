import { computed, ref } from 'vue'

import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isAuthenticated = computed(() => !!user.value)

  const setUser = userData => {
    user.value = userData
    if (userData) {
      user.value = {
        uid: userData.uid,
        photoURL: userData.photoURL,
        displayName: userData.displayName,
        email: userData.email,
      }
    } else {
      user.value = null
    }
  }

  return {
    user,
    isAuthenticated,
    setUser,
  }
})
