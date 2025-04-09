<template>
  <BaseCard>
    <q-card-section>
      <div class="text-h6">프로필</div>
      <q-form class="q guuter-y-md q-mt-md">
        <q-input outlined dense label="닉네임" />
        <q-input outlined dense label="이메일" readonly />
      </q-form>
    </q-card-section>
    <q-separator />
    <q-card-actions>
      <q-space />
      <q-btn label="저장하기" flat color="primary" />
    </q-card-actions>
  </BaseCard>
</template>

<script setup>
import BaseCard from 'src/components/apps/base/BaseCard.vue'
</script>

<style lang="scss" scoped></style>
