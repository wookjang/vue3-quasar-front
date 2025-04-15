<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">로그인</div>
    <q-form class="q-gutter-y-md">
      <q-input v-model="email" placeholder="Email" outlined dense />
      <q-input
        v-model="password"
        type="password"
        placeholder="Password"
        outlined
        dense
      />
      <div>
        <q-btn
          label="Login"
          class="full-width"
          unelevated
          color="primary"
          @click="login"
        />
        <div class="flex justify-between">
          <q-btn
            label="비밀번호 찾기"
            color="secondary"
            flat
            dense
            size="13px"
            @click="$emit('changeView', 'FindPasswordForm')"
          />
          <q-btn
            label="이메일로 회원가입"
            color="secondary"
            flat
            dense
            size="13px"
            @click="$emit('changeView', 'SignUpForm')"
          />
        </div>
      </div>
      <q-separator />
      <q-btn
        label="구글 계정으로 로그인하기"
        class="full-width"
        unelevated
        color="primary"
        outline
        @click="$emit('changeView', 'SignInForm')"
      />
    </q-form>
  </div>
</template>

<script setup>
import { signIn } from 'src/services/member'
import { useAuthStore } from 'src/store/auth'
import { useDialogStore } from 'src/store/dialog'
import { ref } from 'vue'

const password = ref('')
const email = ref('')
const auth = useAuthStore()
const dialog = useDialogStore()
defineEmits(['changeView', 'update:modelValue'])
const login = async () => {
  try {
    const { data } = await signIn({
      email: email.value,
      password: password.value,
    })
    auth.setUser(data.user)
    dialog.showAlert(data.message)
  } catch (error) {
    alert(error)
  }
}
// alert(response.message)
</script>

<style lang="scss" scoped></style>
