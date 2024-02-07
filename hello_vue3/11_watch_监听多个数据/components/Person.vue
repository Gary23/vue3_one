<template>
  <div>
    <h2>多个数据监听</h2>
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
  // 监听多个数据
  watch([() => person.name, () => person.car], (newVal, oldVal) => {
    console.log('person name:', newVal, oldVal)
  }, { deep: true })   


</script>

<style scoped>

</style>
