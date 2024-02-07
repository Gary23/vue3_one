<template>
  <div>
    <h1 ref="countryRef">{{ country }}</h1>
    <Person ref="personRef" />
    <button @click="pringCountry">点击打印h1元素</button>
    <button @click="pringPerson">点击打印Person组件</button>
  </div>
</template>

<script lang="ts" setup name="App">
import Person from './components/Person.vue'

import { ref } from 'vue'

const country = ref('中国')
const countryRef = ref(null)
const personRef = ref(null)

function pringCountry() {
  console.log(countryRef.value);    // 打印的是h1的dom元素
}
function pringPerson() {
  console.log(personRef.value);    // 打印的是Person组件的实例
  console.log(personRef.value.city);    // 只有子组件defineExpose暴露的属性才能被访问
  console.log(personRef.value.area);    
}

</script>

<style scoped>

</style>
