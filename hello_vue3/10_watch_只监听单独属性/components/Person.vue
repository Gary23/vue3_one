<template>
  <div>
    <h2>4 只监听属性</h2>
    <div>{{ person.name }}</div>
    <div>{{ person.age }}</div>
    <div>{{ person.car.c1 }}</div>
    <div>{{ person.car.c2 }}</div>
    <button @click="changeName">name+~</button>
    <button @click="changeAge">age+1</button>
    <button @click="changeC1">修改c1</button>
    <button @click="changeC2">修改c2</button>
    <button @click="changeCar">替换car</button>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { reactive, watch } from 'vue'
  // 按钮：修改name   修改age    修改c1   修改c2   修改car
  const person = reactive({
    name: '小李',
    age: 18,
    car: {
      c1: '奇瑞',
      c2: '吉利'
    }
  })

  function changeName() {
    person.name += '~'
  }
  function changeAge() {
    person.age += 1
  }
  function changeC1() {
    person.car.c1 = '奔驰'
  }
  function changeC2() {
    person.car.c2 = '宝马'
  }
  function changeCar() {
    person.car = {
      c1: '奥迪',
      c2: '大众'
    }
  }
  // () => person.name 监听name的getter函数
  watch(() => person.name, (newVal, oldVal) => {
    console.log('person name:', newVal, oldVal)
  })   
  // person.car因为是一个对象，所以不需要getter函数，只有基本类型数据才需要getter函数
  // 但是只能监听car内部属性的变化，changeCar函数不会触发这个watch
  watch(person.car, (newVal, oldVal) => {
    console.log('person car:', newVal, oldVal)
  })   
  // getters配合深度监听，可以监听car内部属性的变化，也可以监听car本身的变化
  watch(() => person.car, (newVal, oldVal) => {
    console.log('person car getter:', newVal, oldVal)
  }, { deep: true })   

</script>

<style scoped>

</style>
