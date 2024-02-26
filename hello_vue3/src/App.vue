<template>
  <div>
    <Person a="abc" :list="list" />
    <!-- <Person a="abc" /> -->
  </div>
</template>

<script lang="ts" setup name="App">
import Person from './components/Person.vue'
import { type persons } from '@/types'
import { reactive } from 'vue'

// 手动指定泛型的类型为persons
const list = reactive<persons>([
  {id: '001', name: 'Tom', age: 18},
  {id: '002', name: 'Jerry', age: 20},
  {id: '003', name: 'Mickey', age: 22}
])

</script>

<style scoped>

</style>
