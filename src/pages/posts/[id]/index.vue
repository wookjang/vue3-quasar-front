<template>
  <q-page padding>
    <PostDetails />

    <q-separator class="q-my-xl" />
    <PostComments />
  </q-page>
</template>

<script setup>
// import { useRoute } from 'vue-router'
import PostDetails from './components/PostDetails.vue'
import PostComments from './components/PostComments.vue'

// const route = useRoute()
// console.dir(route.meta)
</script>

<style lang="scss" scoped></style>
<route lang="yaml">
meta:
  width: 800px
  layout: default
</route>
