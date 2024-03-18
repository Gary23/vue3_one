
<template>
  <div class="father">
		<div>{{ person1 }}</div>
		<button @click="changeAge1">person1修改年龄加1</button>
		<hr>
		<div>{{ person2 }}</div>
		<button @click="changeAge2">person2修改年龄加1</button>
	</div>
</template>

<script setup lang="ts" name="Father">
	import { reactive, toRaw } from 'vue'

	let person1 = reactive({
		name: 'tom',
		age: 28
	})

	let person2 = toRaw(person1)

	function changeAge1() {
		person1.age++
	}

	function changeAge2() {
		person2.age++
	}

</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>