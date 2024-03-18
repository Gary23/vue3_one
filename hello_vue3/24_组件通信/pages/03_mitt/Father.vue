<template>
  <div class="father">
    <h3>父组件</h3>
    <button @click="showFlag = false">卸载Child2组件</button>
    <Child1/>
    <Child2 v-if="showFlag"/>
  </div>
</template>

<script setup lang="ts" name="Father">
  import Child1 from './Child1.vue'
  import Child2 from './Child2.vue'
  import { ref } from 'vue'
  let showFlag = ref(true)

  import emitter from '@/utils/emitter'

  emitter.emit('test1')
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
    border-radius: 10px;
	}
  .father button{
    margin-left: 5px;
  }
</style>