<template>
  <div>
    <h3>我是Child组件</h3>
    <p v-beauty="sum">{{ sum }}</p>
    <p>{{ sum }}</p>
    <button @click="addCount">sum加1</button>
  </div>
</template>

<script setup lang="ts" name="Child">
import { ref } from 'vue'
let sum = ref(0)

function addCount(){
  sum.value++
}

</script>

<style scoped>

</style>