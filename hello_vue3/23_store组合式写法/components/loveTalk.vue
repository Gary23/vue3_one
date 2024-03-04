<template>
  <div>
    <button @click="getLoveTalk">获取一句话</button>
    <ul>
      <li v-for="item in loveTalkList" :key="item.id">
        <p>{{ item.content }}</p>
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup name="lioveTalk">
import { useLoveTalkStore } from '@/store/useLoveTalkStore'
import { storeToRefs } from 'pinia'

const loveTalkStore = useLoveTalkStore()
console.log('loveTalkStore', loveTalkStore);
let { loveTalkList } = storeToRefs(loveTalkStore)

loveTalkStore.$subscribe((mutation, state) => {
  console.log('mutation', mutation)
  console.log('state', state)
})

function getLoveTalk() {
  loveTalkStore.getLoveTalk()
}

getLoveTalk()

</script>
<style>
  
</style>