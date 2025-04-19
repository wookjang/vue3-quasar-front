import { computed, ref } from 'vue'

import { defineStore } from 'pinia'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const user = ref(null)
    const isAuthenticated = computed(() => !!user.value)

    const setUser = userData => {
      user.value = userData
        ? {
            seq: userData.seq,
            nickname: userData.nickname,
            email: userData.email,
            role: userData.role,
            accessToken: userData.accessToken,
          }
        : null
    }
    const setNickName = nickname => {
      user.value.nickname = nickname
    }

    const logout = () => {
      user.value = null
    }

    return { user, isAuthenticated, setUser, setNickName, logout }
  },
  {
    persist: true, // ✅ 상태를 localStorage에 저장!
  },
)
