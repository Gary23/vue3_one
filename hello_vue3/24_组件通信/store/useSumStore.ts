import { defineStore } from "pinia";
import { ref, computed } from 'vue'

export const useSumStore = defineStore('sum', function() {
  let sum = ref(0)

  function add(value: string|number) {
    if (sum.value < 100) {
      sum.value+=Number(value)
    }
  }
  function minus(value: string|number) {
    if (sum.value > 0) {
      sum.value-=Number(value)
    }
  }
  const formatSum = computed(() => {
    return `￥${sum.value}`
  })
  return {
    sum,
    add,
    minus,
    formatSum
  }
})