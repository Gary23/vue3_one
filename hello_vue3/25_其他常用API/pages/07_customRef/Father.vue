<template>
  <div class="father">
		<div>{{ sum1 }}</div>
		<input v-model="sum1" />
		<hr>
		<div>{{ sum2 }}</div>
		<input v-model="sum2" />
	</div>
</template>

<script setup lang="ts" name="Father">
	import { ref, customRef } from 'vue'
	let sum1 = ref(0)
	import sum2 from './hooks/useSumRef.ts'

</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>