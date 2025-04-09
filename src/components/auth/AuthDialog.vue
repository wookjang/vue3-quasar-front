<template>
  <q-dialog
    :model-value="modelValue"
    @update:model-value="val => $emit('update:modelValue', val)"
    transition-show="none"
    transition-hide="none"
    @hide="changeViewMode('SignInForm')"
  >
    <q-card :style="{ width: '400px' }">
      <q-card-section>
        <q-space />
        <div class="text-h6"></div>
      </q-card-section>
      <q-btn icon="close" flat round dense v-close-popup />
      <q-card-section class="q-px-xl q-pb-xl">
        <!-- v-if 조건부 렌더링링-->
        <!-- <SignInForm
          v-if="viewModel === 'SignInForm'"
          @change-view="changeViewMode"
        />
        <SignUpForm
          v-else-if="viewModel === 'SignUpForm'"
          @change-view="changeViewMode"
        />
        <FindPasswordForm v-else @change-view="changeViewMode" /> -->

        <!--동적 컴포넌트-->

        <component
          :is="authViewComponents[viewModel]"
          @change-view="changeViewMode"
        ></component>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
// import SignInForm from './SignInForm.vue'
// import SignUpForm from './SignUpForm.vue'
// import FindPasswordForm from './FindPasswordForm.vue'
import { defineAsyncComponent, ref } from 'vue'

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['update:modelValue'])

const viewModel = ref('SignInForm')

const changeViewMode = mode => {
  viewModel.value = mode
}

// const authViewComponents = {
//   SignInForm,
//   SignUpForm,
//   FindPasswordForm,
// }

const authViewComponents = {
  SignInForm: defineAsyncComponent(() => import('./SignInForm.vue')),
  SignUpForm: defineAsyncComponent(() => import('./SignUpForm.vue')),
  FindPasswordForm: defineAsyncComponent(
    () => import('./FindPasswordForm.vue'),
  ),
}
</script>

<style lang="scss" scoped></style>
