import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router/auto'

import { route } from 'quasar/wrappers'
import { setupLayouts } from 'virtual:generated-layouts'

// import routes from './routes';

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    // routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
    extendRoutes: routes => {
      return setupLayouts(
        routes.map(route => {
          // admin 경로만 layout 직접 지정
          if (route.path.includes('admin')) {
            return {
              ...route,
              meta: {
                ...route.meta,
                layout: 'admin',
              },
            }
          }
          return {
            ...route,
            meta: {
              ...(route.meta || {}),
              layout: (route.meta && route.meta.layout) || 'default',
            },
          }
        }),
      )
    },
  })

  return Router
})
