<template>
  <div class="flex items-center q-mb-lg">
    <div class="text-h5">커뮤니티 목록</div>
    <q-space />
    <q-tabs narrow-indicator dense>
      <q-tab :ripple="false" label="최신순" name="createTime" />
      <q-tab :ripple="false" label="조회순" name="readCount" />
      <q-tab :ripple="false" label="좋아요순" name="likeCount" />
    </q-tabs>
  </div>
</template>

<script setup>
// import { useRoute } from 'vue-router'

// const route = useRoute()
// console.dir(route.meta.isLayout)
</script>

<style lang="scss" scoped></style>
