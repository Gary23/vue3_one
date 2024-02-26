<template>
  <div>
    ？？？
  </div>
</template>

<script lang="ts" setup name="Person">
import { type personInter, type persons } from '@/types'

const person:personInter = {id: '001', name: 'Tom', age: 18}
console.log(person)

const personList:persons = [
  {id: '001', name: 'Tom', age: 18},
  {id: '002', name: 'Jerry', age: 20},
  {id: '003', name: 'Mickey', age: 22}
]
console.log(personList)

</script>

<style scoped>

</style>
