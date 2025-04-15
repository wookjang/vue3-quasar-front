// src/stores/dialog.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDialogStore = defineStore('dialog', () => {
  const alert = ref({
    show: false,
    title: '',
    message: '',
  })

  const confirm = ref({
    show: false,
    message: '',
    resolve: null,
  })

  const showAlert = (title, message) => {
    alert.value = {
      show: true,
      title,
      message,
    }
  }

  const hideAlert = () => {
    alert.value.show = false
  }

  const confirmAsync = message => {
    confirm.value.message = message
    confirm.value.show = true

    return new Promise(resolve => {
      confirm.value.resolve = resolve
    })
  }

  const handleConfirm = result => {
    confirm.value.show = false
    confirm.value.resolve?.(result)
    confirm.value.resolve = null
  }

  return {
    alert,
    confirm,
    showAlert,
    hideAlert,
    confirmAsync,
    handleConfirm,
  }
})
