import { useAuthStore } from './auth'

// import { useMemberStore } from './member'
// 필요하면 더 추가

export function initializeStores() {
  const stores = {
    auth: useAuthStore(),
  }

  // 개발 중 디버깅용
  if (process.env.DEV) {
    // @ts-ignore
    window.$stores = stores
  }

  return stores
}
