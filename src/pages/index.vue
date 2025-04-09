<template>
  <q-page padding>
    <div class="row q-col-gutter-x-lg">
      <PostLeftBar class="col-grow" />
      <section class="col-7">
        <PostHeader />
        <PostList :items="posts" />
      </section>
      <PostRightBar class="col-3" @open-write-dialog="openWriteDialog" />
    </div>
    <PostWriteDialog v-model="postDialog" />
  </q-page>
</template>

<script setup>
import PostList from 'src/components/apps/posts/PostList.vue'
import PostHeader from './components/PostHeader.vue'
import PostLeftBar from './components/PostLeftBar.vue'
import PostRightBar from './components/PostRightBar.vue'
import { ref } from 'vue'
import PostWriteDialog from 'src/components/apps/posts/PostWriteDialog.vue'

// import { useRouter } from 'vue-router'

// const router = useRouter()

const posts = Array.from(Array(20), (_, index) => ({
  id: 'A' + index,
  title: 'Vue Firebase 강의' + index,
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quis sint voluptates inventore obcaecati voluptatibus repellendus corrupti, perspiciatis, deserunt praesentium asperiores! Suscipit pariatur quibusdam, libero est veniam quis velit sequi?',
  readCount: 1,
  commentCount: 2,
  likeCount: 3,
  bookmarCount: 4,
  tage: ['html', 'css', 'javascript'],
  uid: 'uid',
  category: '카테고리',
}))

const postDialog = ref(false)
const openWriteDialog = () => {
  postDialog.value = true
}
</script>

<style lang="scss" scoped></style>
