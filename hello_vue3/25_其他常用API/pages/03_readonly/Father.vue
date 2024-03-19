<template>
  <div class="father">
		<div>{{ sum1 }}</div>
		<div>{{ sum2 }}</div>
		<hr>
		<button @click="addCount1">sum1加1</button>
		<button @click="addCount2">sum2加1</button>
		<hr>
		<div>{{ car1 }}</div>
		<div>{{ car2 }}</div>
		<hr>
		<button @click="changeBrand1">修改car1品牌</button>
		<button @click="changeColor1">修改car1颜色</button>
		<button @click="changePrice1">修改car1价格</button>
		<button @click="changeBrand2">修改car2品牌</button>
		<button @click="changeColor2">修改car2颜色</button>
		<button @click="changePrice2">修改car2价格</button>
  </div>
</template>

<script setup lang="ts" name="Father">
	import { ref, readonly, reactive } from 'vue'

	let sum1 = ref(0)
	let sum2 = readonly(sum1)
	let car1 = reactive({
		brand: 'BMW',
		config: {
			color: 'red',
			price: '20w'
		}
	})
	let car2 = readonly(car1)

	function addCount1() {
		sum1.value++
	}

	function addCount2() {
		sum2.value++
	}

	function changeBrand1() {
		car1.brand = 'Benz'
	}

	function changeColor1() {
		car1.config.color = 'blue'
	}

	function changePrice1() {
		car1.config.price = '30w'
	}

	function changeBrand2() {
		car2.brand = 'Lincoln'
	}

	function changeColor2() {
		car2.config.color = 'black'
	}

	function changePrice2() {
		car2.config.price = '50w'
	}


</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>