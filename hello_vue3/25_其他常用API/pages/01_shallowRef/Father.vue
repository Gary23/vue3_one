<template>
  <div class="father">
		<div>{{ sum }}</div>
		<hr>
    <div>{{ person.name }}</div>
    <div>{{ person.age }}</div>
		<button @click="addCount">sum+1</button>
		<button @click="changeName">修改姓名</button>
		<button @click="changeAge">修改年龄</button>
		<button @click="changePerson">修改整个person</button>
  </div>
</template>

<script setup lang="ts" name="Father">
	import { shallowRef } from 'vue'

	let sum = shallowRef(0)
	let person = shallowRef({
		name: 'tim',
		age: 18
	})
	
	function addCount(){
		sum.value++
	}

	function changeName() {
		person.value.name = 'jack'
	}

	function changeAge() {
		person.value.age = 20
	}

	function changePerson() {
		person.value = {
			name: 'james',
			age: 30
		}
	}


</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>