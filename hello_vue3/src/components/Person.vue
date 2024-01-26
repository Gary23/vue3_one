<template>
  <div>姓名：{{ name }}</div>
  <div>年龄：{{ age }}</div>
  <button @click="openTel">查看联系方式</button>
  <button @click="changeName">修改姓名</button>
  <button @click="changeAge">修改年龄</button>
</template>

<script lang="ts" setup name="Person">
    let name = '张三'
    let age = 18
    let tel = '123456789'

    function openTel() {
      alert(tel)
    }
    function changeName() {
      name = '李四'
    }
    function changeAge() {
      age = 20
    }

</script>

<style scoped>

</style>
