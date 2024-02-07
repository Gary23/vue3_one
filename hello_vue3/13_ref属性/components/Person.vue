<template>
  <div>
    <h2>{{ city }}</h2>
    <h3>{{ area }}</h3>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { ref, defineExpose } from 'vue'

  // h1 h2 h3  国家 城市 区
// button 点击输出h2元素
  const city = ref('青岛')
  const area = ref('市北')

  defineExpose({
    city,
    area
  })

</script>

<style scoped>

</style>
