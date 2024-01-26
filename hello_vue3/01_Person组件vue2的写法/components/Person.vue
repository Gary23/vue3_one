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
  data() {
    return {
      name: '张三',
      age: 18,
      tel: '123456789'
    }
  },
  methods: {
    openTel() {
      alert(this.tel)
    },
    changeName() {
      this.name = '李四'
    },
    changeAge() {
      this.age = '20'
    }
  }
}
</script>

<style scoped>

</style>
