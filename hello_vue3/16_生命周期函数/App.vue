<template>
  <div>
    <Person v-if="showFlag" />
  </div>
</template>

<script lang="ts" setup name="App">

import Person from './components/Person.vue'
import {
  onBeforeMount,
  onMounted,
  ref
} from 'vue'


console.log('App组件创建')
// 先执行App组件的onBeforeMount
onBeforeMount(() => {
  console.log('App组件挂载前')
})
// 等Person组件挂载后，才会执行App组件的onMounted
onMounted(() => {
  console.log('App组件挂载后')
})

let showFlag = ref(true)
// 10秒钟后 Person 组件卸载
window.setTimeout(() => {
  showFlag.value = false
}, 10000)


</script>

<style scoped>

</style>
