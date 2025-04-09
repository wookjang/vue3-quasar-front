<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-2">
    <q-page-container>
      <q-page padding>
        <BaseCard>
          <q-toolbar>
            <q-toolbar-title>글쓰기</q-toolbar-title>
            <q-btn v-close-popup flat round dense icon="close" />
          </q-toolbar>
          <q-separator />
          <PostForm
            v-model:title="form.title"
            v-model:category="form.category"
            v-model:content="form.content"
          >
            <template #actions>
              <q-btn type="submit" flat label="취소" v-close-popup />
              <q-btn type="submit" flat label="수정" color="primary" />
            </template>
          </PostForm>
        </BaseCard>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
// const getInitialForm = () => ({
//   title: '',
//   category: '',
//   content: '',
//   tags: [],
// })
</script>
<script setup>
import { ref } from 'vue'
import BaseCard from 'src/components/apps/base/BaseCard.vue'
import { useRoute } from 'vue-router'
import PostForm from 'src/components/apps/posts/PostForm.vue'

const form = ref({
  title: '',
  category: '',
  content: '',
  tags: [],
})
const route = useRoute()
console.dir(route.meta)
</script>

<style lang="scss" scoped></style>
<route lang="yaml">
meta:
  layout: default
</route>
