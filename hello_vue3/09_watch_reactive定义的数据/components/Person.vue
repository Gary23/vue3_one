<template>
  <div>
    <h2>3 reactive定义的对象类型数据</h2>
    <div>{{ person.name }}</div>
    <div>{{ person.age }}</div>
    <button @click="changeName">name+~</button>
    <button @click="changeAge">age+1</button>
    <button @click="resetPerson">重新赋值person对象</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { reactive, watch } from 'vue'

  const person = reactive({
    name: '小李',
    age: 18
  })

  function changeName() {
    person.name += '~'
  }
  function changeAge() {
    person.age += 1
  }
  function resetPerson() {
    Object.assign(person, {   // 本质上不修改内存指向，只重置对象内属性
      name: '小王',
      age: 20
    })    
  }

  watch(person, (newVal, oldVal) => {   // newVal 和 oldVal的值是一样的，因为对象的内存指向没变
    console.log('person changed:', newVal, oldVal)
  })   
  

</script>

<style scoped>

</style>
