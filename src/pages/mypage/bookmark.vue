<template>
  <PostList :items="posts" />
</template>

<script setup>
import PostList from 'src/components/apps/posts/PostList.vue'

const posts = Array.from(Array(3), (_, index) => ({
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
</script>

<style lang="scss" scoped></style>
