<template>
  <div>姓名：{{ name }}</div>
  <div>年龄：{{ age }}</div>
  <button @click="openTel">查看联系方式</button>
  <button @click="changeName">修改姓名</button>
  <button @click="changeAge">修改年龄</button>
</template>

<script lang="ts">
export default {
  name: 'Person',
  setup() {
    // 写data数据，非响应式数据
    let name = '张三'
    let age = 18
    let tel = '123456789'

    // 写methods方法  setup里this是undefined
    function openTel() {
      alert(tel)
    }
    function changeName() {
      // 非响应式数据所以修改在view无效
      name = '李四'
    }
    function changeAge() {
      age = 20
    }

    return {name, age, openTel, changeName, changeAge}
    // return () => 'ZZZZZ.......'   // 返回一个函数，整个页面渲染的就是 ZZZZZ.......   
  }
}
</script>

<style scoped>

</style>
