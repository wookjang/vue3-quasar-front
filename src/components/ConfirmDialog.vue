<template>
  <q-dialog v-model="dialog.confirm.show" persistent>
    <q-card>
      <q-card-section>
        <div class="text-h6">{{ dialog.confirm.title }}</div>
      </q-card-section>
      <q-card-section>
        {{ dialog.confirm.message }}
      </q-card-section>
      <q-card-actions align="right">
        <q-btn
          flat
          label="취소"
          color="primary"
          @click="dialog.handleConfirm(false)"
        />
        <q-btn
          flat
          label="확인"
          color="primary"
          @click="dialog.handleConfirm(true)"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useDialogStore } from 'src/store/dialog'

const dialog = useDialogStore()
</script>
