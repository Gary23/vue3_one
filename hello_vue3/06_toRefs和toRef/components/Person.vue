<template>
  <!-- 可以写person.name   也可以直接写name   因为toRefs解构出的数据和原对象是关联的 -->
  <div>姓名：{{ person.name }}</div>
  <div>年龄：{{ person.age }}</div>
  <div>姓名：{{ name }}</div>
  <div>年龄：{{ age }}</div>
  <button @click="changeName">修改姓名</button>
  <button @click="changeAge">修改年龄</button>

  <p>-----------------</p>

  <!-- toRefs和toRef都和原对象关联 -->
  <div>年龄：{{ age2 }}</div>
  <button @click="changeAge2">修改年龄</button>
</template>

<script lang="ts" setup name="Person">
  // 引入reactive
  import { reactive, toRefs, toRef } from 'vue'
  let person = reactive({
    name: '张三',
    age: 18,
  })

  // let { name, age } = person   非响应式数据
  let { name, age } = toRefs(person)   // 用才能结构出响应式数据，结构出的数据是 ObjectRefImpl 对象（ ref 类型的对象 ）

  let age2 = toRef(person, 'age')   // 只把 name 属性改为 ObjectRefImpl 对象（ ref 类型的对象 ）

  function changeName() {
    name.value = '李四'      // 因为结构出的是ref类型，所以需要修改value的值
  }
  function changeAge() {
    age.value += 1
  }
  function changeAge2() {
    age2.value += 1
  }

</script>

<style scoped>

</style>
