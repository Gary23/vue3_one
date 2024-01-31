<template>
  <div>姓名：{{ person.name }}</div>
  <div>年龄：{{ person.age }}</div>
  <button @click="openTel">查看联系方式</button>
  <button @click="changeName">修改姓名</button>
  <button @click="changeAge">修改年龄</button>

  <p>---------------------------</p>

  <div>姓名：{{ person2.name }}</div>
  <div>年龄：{{ person2.age }}</div>
  <button @click="openTel2">查看联系方式</button>
  <button @click="changeName2">修改姓名</button>
  <button @click="changeAge2">修改年龄</button>
</template>

<script lang="ts" setup name="Person">
  // 引入reactive
  import { reactive, ref } from 'vue'
  let person = reactive({     // 返回一个Proxy对象
    name: '张三',
    age: 18,
    tel: '123456789'
  })

  let person2 = ref({     // 返回一个refImpl对象吗，但是value依然是一个Proxy对象，value是通过reactive实现的
    name: 'tom',
    age: 18,
    tel: '33990022'
  })

  // person = {     reactive调用的，重新赋值，会失去响应式
  //   name: '张三1',
  //   age: 181,
  //   tel: '123456789'
  // }

  // person2.value = {     // ref调用的，重新赋值，不去响应式
  //   name: 'tom1',
  //   age: 181,
  //   tel: '33990022'
  // }

  function openTel() {
    alert(person.tel)
  }
  function changeName() {
    person.name = '李四'      // 修改时候直接修改属性值就可以
  }
  function changeAge() {
    person.age += 1
  }

  function openTel2() {
    alert(person2.value.tel)
  }
  function changeName2() {
    person2.value.name = 'jack'      // 修改时候需要修改value的值
  }
  function changeAge2() {
    person2.value.age += 1
  }

</script>

<style scoped>

</style>
