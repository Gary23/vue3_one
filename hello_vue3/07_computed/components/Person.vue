<template>
  <div>
    <div> {{ fullName }} </div>
    firstName: <input type="text" v-model="firstName">
    <br>
    lastName：<input type="text" v-model="lastName">
    <br>
  </div>
</template>

<script lang="ts" setup name="Person">
  import { computed, ref } from 'vue'
  let firstName = ref('')
  let lastName = ref('')

  // 只读的computed计算属性
  const fullName = computed(() => {
    return firstName.value + ' ' + lastName.value
  });

  // 可读写的computed计算属性
  const fullName2 = computed({       // 返回一个ComputedRefImpl类型的数据
    get: () => {
      return firstName.value + ' ' + lastName.value
    },
    set: (value: string) => {
      const names = value.split(' ')
      firstName.value = names[0]
      lastName.value = names[1]
    }
  });

  fullName2.value = 'sam zhang'

</script>

<style scoped>

</style>
