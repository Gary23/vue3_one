<template>
  <div>
    <h3>我是Child组件</h3>
  </div>
</template>

<script setup lang="ts" name="Child">
import axios from 'axios'

let result = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')

console.log(result)

</script>

<style scoped>

</style>