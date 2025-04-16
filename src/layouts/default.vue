<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-2">
    <q-header bordered class="bg-white text-grey-9">
      <q-toolbar>
        <q-btn flat dense to="/">
          <q-toolbar-title>
            <q-avatar>
              <img src="/logo.png" />
            </q-avatar>
            WATCH GALLERY
          </q-toolbar-title>
        </q-btn>
        <q-space />
        <q-btn stretch flat label="Home" to="/" />
        <q-separator class="q-my-md q-mr-md" vertical />
        <q-btn
          v-if="!auth.user"
          unelevated
          rounded
          color="primary"
          label="로그인 / 회원가입"
          @click="openAuthDialog"
        />

        <q-btn flat class="q-pa-xs">
          <div class="row items-center no-wrap q-gutter-sm">
            <template v-if="auth.user">
              <span class="text-caption text-grey-8">
                {{ auth?.user?.nickname }}님
              </span>
              <q-avatar size="32px">
                <img
                  :src="
                    auth.user.photoURL ||
                    'https://cdn.quasar.dev/img/avatar.png'
                  "
                />
              </q-avatar>
            </template>
          </div>
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup to="/mypage/profile">
                <q-item-section>프로필</q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="logout()">
                <q-item-section>로그아웃</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container :style="pageContainerStyles">
      <router-view />
    </q-page-container>
    <AuthDialog v-model="authDialog" />
  </q-layout>
</template>

<script setup>
import AuthDialog from 'src/components/auth/AuthDialog.vue'
import { useAuthStore } from 'src/store/auth'
import { useDialogStore } from 'src/store/dialog'

import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const auth = useAuthStore()
const route = useRoute()
const router = useRouter()

const pageContainerStyles = computed(() => ({
  maxWidth: route.meta?.width || '1080px',
  margin: '0 auto',
}))

const authDialog = ref(false)
const openAuthDialog = () => (authDialog.value = true)
const dialog = useDialogStore()
const logout = async () => {
  const isConfirm = await dialog.confirmAsync('로그아웃 하시겠습니까?')

  if (!isConfirm) return

  router.push('/')
  auth.logout()
}
</script>
