<template>
  <div class="father">
		<h3>我是Father组件</h3>
		<img src="https://img1.baidu.com/it/u=440042325,1988340811&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800" />
		<Modal />
  </div>
</template>

<script setup lang="ts" name="Father">
	import Modal from './Modal.vue'

</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
		filter: saturate(0)
	}
	img {
		width: 50px;
		height: 50px;	
		display: block;
		margin-bottom: 10px;	
	}
</style>