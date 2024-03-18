<template>
  <div class="father">
		<div>{{ car }}</div>
		<hr>
		<button @click="changeBrand">修改品牌</button>
		<button @click="changeColor">修改颜色</button>
		<button @click="changeEngine">修改发动机</button>
  </div>
</template>

<script setup lang="ts" name="Father">
	import { shallowReactive } from 'vue'

	let car = shallowReactive({
		brand: 'BMW',
		config: {
			color: 'red',
			engine: 'v8'
		}
	})

	function changeBrand() {
		car.brand = 'Benz'
	}

	function changeColor() {
		car.config.color = 'blue'
	}

	function changeEngine() {
		car.config.engine = 'v12'
	}

</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>