<template>
  <router-view />
  <AlertDialog />
  <ConfirmDialog />
</template>

<script setup>
import ConfirmDialog from './components/ConfirmDialog.vue'
import AlertDialog from './components/AlertDialog.vue'
</script>
