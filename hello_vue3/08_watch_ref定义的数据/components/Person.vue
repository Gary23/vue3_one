<template>
  <div>
    <h2>1 ref定义的基本类型数据</h2>
    <div>sum：{{ sum }}</div>
    <button @click="sumAdd">sum+1</button>
    <hr>
    <h2>2 ref定义的对象类型数据</h2>
    <div>{{ person.name }}</div>
    <div>{{ person.age }}</div>
    <button @click="changeName">name+~</button>
    <button @click="changeAge">age+1</button>
    <button @click="resetPerson">重新赋值person对象</button>
    <hr>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { watch, ref } from 'vue'

  // --------------ref定义的基本类型数据----------------
  const sum = ref(0)

  function sumAdd() {
    sum.value++
  }

  const stopWatch = watch(sum, (newVal, oldVal) => {
    console.log('sum changed:', newVal, oldVal)
    if (newVal === 10) {     // 如果sum大于10就停止监听
      stopWatch()
    }
  })


  // --------------ref定义的对象类型数据----------------
  const person = ref({
    name: '小李',
    age: 18
  })

  function changeName() {
    person.value.name += '~'
  }
  function changeAge() {
    person.value.age += 1
  }
  function resetPerson() {
    Object.assign(person.value, {   // 本质上不修改内存指向，只重置对象内属性
      name: '小王',
      age: 20
    })    
  }

  watch(person, (newVal, oldVal) => {   // newVal 和 oldVal的值是一样的，因为对象的内存指向没变
    console.log('person changed:', newVal, oldVal)
  }, { 
    deep: true,    // ref定义的对象类型数据，需要深度监听对象的变化
    immediate: true,    // 页面渲染后先执行一遍watch,第一遍执行 oldVal 是undefined 
  })   


</script>

<style scoped>

</style>
