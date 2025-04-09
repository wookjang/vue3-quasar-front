<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">회원가입</div>
    <q-form class="q-gutter-y-md">
      <q-input v-model="nickName" placeholder="NickName" outlined dense />
      <q-input v-model="email" placeholder="Email" outlined dense />
      <q-input
        v-model="password"
        placeholder="Password(문자, 숫자조합 8자 이상)"
        outlined
        dense
        :error="!isPasswordValid"
        :error-message="'문자와 숫자를 조합해 8자 이상 입력하세요.'"
      />
      <q-btn
        label="가입하기"
        class="full-width"
        unelevated
        color="primary"
        :disable="isConfirm"
        @click="register"
      />

      <q-btn
        label="로그인 하기"
        class="full-width"
        unelevated
        flat
        @click="$emit('changeView', 'SignInForm')"
      />
    </q-form>
  </div>
</template>

<script setup>
import { registerMember } from 'src/services/member'
import { computed, ref } from 'vue'

const nickName = ref('')
const email = ref('')
const password = ref('')

const isConfirm = computed(() => {
  const pw = password.value
  const hasLetter = /[a-zA-Z]/.test(pw)
  const hasNumber = /[0-9]/.test(pw)
  return !(pw.length >= 8 && hasLetter && hasNumber)
  // 조건을 만족하면 false (비활성화 아님), 그렇지 않으면 true (버튼 비활성화)
})

const isPasswordValid = computed(() => {
  const pw = password.value
  const hasLetter = /[a-zA-Z]/.test(pw)
  const hasNumber = /[0-9]/.test(pw)
  return pw.length >= 8 && hasLetter && hasNumber
})

const register = async () => {
  try {
    await registerMember({
      nickname: nickName.value,
      email: email.value,
      password: password.value,
    })

    emit('changeView', 'SignInForm')
  } catch (err) {
    console.error(err)
  }
}

const emit = defineEmits(['changeView'])
</script>

<style lang="scss" scoped></style>
