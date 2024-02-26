<template>
  <div>
    {{ sum }}
    <div>
      <button @click="sumAdd">点我+1</button>
    </div>
  </div>
</template>

<script lang="ts" setup name="Person">
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue'

console.log('person组件创建')
// Person组件挂载到App组件之前
onBeforeMount(() => {
  console.log('person组件挂载前')
})
// Person组件挂载到App组件之后，这里执行完之后App组件才会执行onMounted
onMounted(() => {
  console.log('person组件挂载后')
})
// sum数据更新前
onBeforeUpdate(() => {
  console.log('person组件更新前')
})
// sum数据更新后
onUpdated(() => {
  console.log('person组件更新后')
})
// Person组件卸载前
onBeforeUnmount(() => {
  console.log('person组件卸载前')
})
// Person组件卸载后
onUnmounted(() => {
  console.log('person组件卸载后')
})

let sum = ref(0)

function sumAdd() {
  sum.value++
}

</script>

<style scoped>

</style>
