<template>
  <div>
    <div>sum: {{ formatSum }}</div>
    <div>
      <select ref="selectRef" name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
    <div>
      <button @click="add">+</button>
      <button @click="minus">-</button>
    </div>
  </div>
</template>
<script setup lang="ts" name="sum">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSumStore } from '@/store/useSumStore'

const selectRef = ref(null)
const sumStore = useSumStore()
console.log('sumStore', sumStore);
const { formatSum } = storeToRefs(sumStore)

function add() {
  sumStore.add((selectRef.value as any).value)
}
function minus() {
  // 直接修改store上的数据就可以修改store中的值
  sumStore.sum -= Number((selectRef.value as any).value)
}
</script>
<style>
  
</style>