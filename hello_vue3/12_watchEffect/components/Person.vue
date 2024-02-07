<template>
  <div>
    <div>温度{{ temp }}</div>
    <div>水位{{ height }}</div>
    <button @click="tempAdd">temp+10</button>
    <button @click="heightAdd">height+10</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { ref, watchEffect } from 'vue'

  const temp = ref(20)
  const height = ref(20)
  
  function tempAdd() {
    temp.value += 10
  }
  function heightAdd() {
    height.value += 10
  }
  // 写在watchEffect内部的响应式数据都会被监听
  watchEffect(() => {
    // 只有temp和height的值发生变化时，才会触发这个函数
    if (temp.value > 100 || height.value > 100) {
      console.log('温度或水位过高')
    }
  })

</script>

<style scoped>

</style>
