<template>
  <BaseCard>
    <q-card-section>
      <div class="text-h6">프로필</div>
      <q-form class="q guuter-y-md q-mt-md">
        <q-input v-model="nickname" outlined dense label="닉네임" />
        <q-input v-model="email" outlined dense label="이메일" readonly />
      </q-form>
    </q-card-section>
    <q-separator />
    <q-card-actions>
      <q-space />
      <q-btn label="저장하기" flat color="primary" @click="changeNickName" />
    </q-card-actions>
  </BaseCard>
</template>

<script setup>
import BaseCard from 'src/components/apps/base/BaseCard.vue'
import { updateNickname } from 'src/services/member'
import { useAuthStore } from 'src/store/auth'
import { useDialogStore } from 'src/store/dialog'
import { ref } from 'vue'
const auth = useAuthStore()
const nickname = ref(auth.user?.nickname ?? '')
const email = ref(auth.user?.email ?? '')
const dialog = useDialogStore()

const changeNickName = async () => {
  const isConfirm = await dialog.confirmAsync('닉네임을 변경하시겠습니까?')

  if (!isConfirm) return

  try {
    const { data } = await updateNickname({
      nickname: nickname.value,
      email: auth.user.email,
    })
    auth.setNickName(data.user.nickname)
    dialog.showAlert(data.message)
  } catch (error) {
    dialog.showAlert(error.message)
  }
}
</script>

<style lang="scss" scoped></style>
