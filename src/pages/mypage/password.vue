<template>
  <BaseCard>
    <q-card-section>
      <div class="text-h6">비밀번호 변경</div>
      <q-form class="q-gutter-y-md q-mt-md">
        <!-- 첫 번째 비밀번호 입력 -->
        <q-input
          v-model="password"
          type="password"
          outlined
          dense
          label="새로운 비밀번호"
          :error="passwordErrors.length > 0"
          :error-message="passwordErrors"
          hide-bottom-space="false"
        />

        <!-- 확인용 비밀번호 입력 -->
        <q-input
          v-model="confirmPassword"
          type="password"
          outlined
          dense
          label="새로운 비밀번호 확인"
          :error="confirmPasswordError !== ''"
          :error-message="confirmPasswordError"
        />
      </q-form>
    </q-card-section>
    <q-separator />
    <q-card-actions>
      <q-space />
      <q-btn
        label="저장하기"
        flat
        color="primary"
        :disable="!isValid"
        @click="changePassword"
      />
    </q-card-actions>
  </BaseCard>
</template>

<script setup>
import BaseCard from 'src/components/apps/base/BaseCard.vue'
import { updatePassword } from 'src/services/member'
import { useAuthStore } from 'src/store/auth'
import { useDialogStore } from 'src/store/dialog'
import { computed, ref } from 'vue'

const password = ref('')
const confirmPassword = ref('')
const dialog = useDialogStore()
const auth = useAuthStore()
// 비밀번호 자체 조건 에러 메시지
const passwordErrors = computed(() => {
  const errors = []
  if (password.value.length < 8) {
    errors.pop()
    errors.push('비밀번호는 8자 이상이어야 합니다.')
  }
  if (!/[a-zA-Z]/.test(password.value)) {
    errors.pop()
    errors.push('문자를 포함해야 합니다.')
  }
  if (!/[0-9]/.test(password.value)) {
    errors.pop()
    errors.push('숫자를 포함해야 합니다.')
  }
  return errors.join('\n')
})

// 비밀번호 확인이 일치하는지
const confirmPasswordError = computed(() => {
  if (confirmPassword.value && confirmPassword.value !== password.value) {
    return '비밀번호가 일치하지 않습니다.'
  }
  return ''
})

// 전체 유효성 확인
const isValid = computed(() => {
  return passwordErrors.value.length === 0 && confirmPasswordError.value === ''
})

const changePassword = async () => {
  const isConfirm = await dialog.confirmAsync('패스워드를 변경하시겠습니까?')

  if (!isConfirm) return

  try {
    const { data } = await updatePassword({
      password: password.value,
      email: auth.user.email,
    })

    dialog.showAlert(data.message)
  } catch (error) {
    dialog.showAlert(error.message)
  }
}
</script>
