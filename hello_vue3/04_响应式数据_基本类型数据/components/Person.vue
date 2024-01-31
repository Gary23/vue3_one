<template>
  <div>姓名：{{ name }}</div>
  <div>年龄：{{ age }}</div>
  <button @click="openTel">查看联系方式</button>
  <button @click="changeName">修改姓名</button>
  <button @click="changeAge">修改年龄</button>
</template>

<script lang="ts" setup name="Person">
  // 引入ref
  import { ref } from 'vue'    // 创建响应式数据
  let name = ref('张三')    // 返回一个refImpl对象
  let age = ref(18)
  let tel = '123456789'

  function openTel() {
    alert(tel)
  }
  function changeName() {
    name.value = '李四'      // 修改refImpl对象上的value属性
  }
  function changeAge() {
    age.value = 20
  }

</script>

<style scoped>

</style>
