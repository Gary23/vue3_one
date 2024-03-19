<template>
	<div class="container-fluid wraper">
		<h3>
			App组件{{ x }}
		</h3>
		<Child />
		<Hello />
	</div>
</template>

<script setup lang="ts" name="App">
import Child from './Child.vue'

</script>

<style>
	.wraper .title {
		padding: 20px;
		text-align: center;
		min-width: 610px;
	}
	.wraper .small{
		font-size: 15px;
	}
	.wraper .list-group-item {
		min-width: 230px;
	}
</style>