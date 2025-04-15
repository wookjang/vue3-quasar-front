<template>
  <q-dialog v-model="dialog.alert.show">
    <q-card>
      <q-card-section>
        <div class="text-h6">{{ dialog.alert.title }}</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        {{ dialog.alert.message }}
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="확인" color="primary" @click="handleOk" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useDialogStore } from 'src/store/dialog'

const dialog = useDialogStore()

const handleOk = () => {
  dialog.alert.onOk?.()
  dialog.hideAlert()
}
</script>
