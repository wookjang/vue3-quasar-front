<template>
  <BaseCard class="q-pa-lg">
    <div class="flex q-mb-md">
      <q-btn
        icon="sym_o_arrow_back"
        flat
        round
        dense
        color="grey"
        size="16px"
      />
      <q-space />
      <q-btn icon="sym_o_favorite" flat round dense color="red" size="16px" />
      <q-btn icon="sym_o_bookmark" flat round dense color="blue" size="16px" />
    </div>
    <div class="flex items-center">
      <q-avatar>
        <img src="https://cdn.quasar.dev/img/avatar.png" />
      </q-avatar>
      <div class="q-ml-md">
        <div>Wook</div>
        <div class="text-grey-6">3일 전</div>
      </div>
      <q-space />
      <q-btn icon="more_horiz" round flat>
        <q-menu>
          <q-list style="min-width: 100px">
            <q-item
              clickable
              v-close-popup
              :to="`/posts/${route.params.id}/edit`"
            >
              <q-item-section>수정하기</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>삭제하기</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </div>

    <div class="q-mt-md text-h5 text-weight-bold">제목입니다</div>
    <div class="row items-center q-gutter-x-md q-mt-md justify-end">
      <PostIcon
        name="sym_o_visibility"
        label="1"
        :tooltip="'조회수'"
      ></PostIcon>
      <PostIcon name="sym_o_sms" label="2" :tooltip="'댓글수'"></PostIcon>
      <PostIcon name="sym_o_favorite" label="3" :tooltip="'좋아요'"></PostIcon>
      <PostIcon name="sym_o_bookmark" label="4" :tooltip="'북마크'"></PostIcon>
    </div>
    <q-separator class="q-my-lg" />
    <div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa
      ipsum exercitationem quod beatae at harum error inventore rem laboriosam
      non qui officiis earum, maxime mollitia optio eos ullam ratione?<br />
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa
      ipsum exercitationem quod beatae at harum error inventore rem laboriosam
      non qui officiis earum, maxime mollitia optio eos ullam ratione?<br />
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa
      ipsum exercitationem quod beatae at harum error inventore rem laboriosam
      non qui officiis earum, maxime mollitia optio eos ullam ratione?<br />
    </div>
  </BaseCard>
</template>

<script setup>
import BaseCard from 'src/components/apps/base/BaseCard.vue'
import PostIcon from 'src/components/apps/posts/PostIcon.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
console.dir(route.meta)
</script>

<style lang="scss" scoped></style>
