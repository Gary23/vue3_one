<template>
  <div>
    <div v-for="item in list" :key="item.id">{{ item.name }}--{{ item.age }}</div>
  </div>
</template>

<script lang="ts" setup name="Person">
import { type persons } from '@/types'
import { withDefaults } from 'vue'

// const props = defineProps(['a', 'list'])     // 接收传参

// const props = defineProps<{list: persons}>()     // 接收list参数 + 限制必传 + 限制类型为persons，如果非persons类型或者list没有传参，控制台会警告

// const props = defineProps<{list?: persons}>()     // 接收list参数 + 限制类型为persons，控制list参数为非必传

const props = withDefaults(defineProps<{list?: persons}>(), {    // 接收list参数 + 限制类型为persons + 设定默认值
  list: () => [{ id: '000', name: '--', age: 0 }]     // 默认值为复杂类型需要函数return
})

console.log(props)

</script>

<style scoped>

</style>
