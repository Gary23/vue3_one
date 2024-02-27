import {
  ref,
} from 'vue'

export default function() {
  let sum = ref(0)

  function sumAdd() {
    sum.value++
  }

  return { sum, sumAdd }
}