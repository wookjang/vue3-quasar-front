<template>
  <StickySideBar>
    <q-btn
      padding="8px 12px 8px 8px"
      unelevated
      color="primary"
      text-color="white"
      class="full-width"
    >
      <q-avatar class="q-mr-sm" color="white" text-color="primary" size="22px">
        <q-icon name="edit" size="14px" />
      </q-avatar>
      <span class="text-weight-bold" @click="$emit('openWriteDialog')"
        >New Post</span
      >
    </q-btn>
    <q-card class="q-mt-md bg-grey-1" bordered flat>
      <q-card-section class="flex items-center q-pb-none">
        <div class="text-weight-bold">태그</div>
        <q-space />
        <q-btn icon="refresh" dense size="sm" flat round color="grey" />
      </q-card-section>
      <q-card-section class="q-pb-sm">
        <q-card class="q-px-sm" bordered flat square>
          <q-input
            borderless
            dense
            input-style="font-size: 12px;"
            placeholder="태그로 검색"
          />
          <div class="q-gutter-sm q-pb-sm">
            <q-btn
              size="10px"
              padding="2px 4px 2px 7px"
              color="grey-3"
              text-color="dark"
              unelevated
              >aaa
              <q-icon name="clear" size="12px" color="grey"> </q-icon>
            </q-btn>
          </div>
        </q-card>
      </q-card-section>
      <q-list padding>
        <q-item v-for="tag in tags" :key="tag.name" clickable dense>
          <q-item-section class="text-teal text-caption">
            #{{ tag.name }}</q-item-section
          >
          <q-item-section side class="text-teal text-caption">
            {{ tag.count }}</q-item-section
          >
        </q-item>
      </q-list>
    </q-card>
  </StickySideBar>
</template>

<script setup>
import StickySideBar from 'src/components/StickySideBar.vue'
import { ref } from 'vue'

defineEmits(['openWriteDialog'])

const tags = ref([
  { name: 'vuejs', count: 10 },
  { name: 'react', count: 8 },
  { name: 'html', count: 12 },
  { name: 'css', count: 10 },
  { name: 'angular', count: 10 },
])
</script>

<style lang="scss" scoped></style>
