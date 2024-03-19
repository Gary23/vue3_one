<template>
  <div class="father">
		<div>{{ car1 }}</div>
		<button @click="changePrice1">car1价格加10</button>
		<hr>
		<div>{{ car2 }}</div>
		<button @click="changePrice2">car2价格加10</button>
	</div>
</template>

<script setup lang="ts" name="Father">
	import { reactive, markRaw } from 'vue'

	let car1 = {
		brand: 'BMW',
		price: 100
	}
	car1 = markRaw(car1)
	let car2 = reactive(car1)

	function changePrice1() {
		car1.price += 10
	}

	function changePrice2() {
		car2.price += 10
	}

</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>