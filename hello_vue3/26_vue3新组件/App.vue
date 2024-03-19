<template>
	<div class="container-fluid wraper">
		<h1 class="title">
			Vue3 其他常用API
		</h1>
		<hr>
		<div class="row">
			<div class="col-xs-3 col-md-3 col-lg-3 col-xl-3">
				<!-- 导航区 -->
				<router-link active-class="active" class="list-group-item" to="/Teleport">1. Teleport</router-link>
				<router-link active-class="active" class="list-group-item" to="/Suspense">2. Suspense</router-link>
			</div>
			<div class="col-xs-9 col-md-9 col-lg-9 col-xl-9">
				<div class="panel-body">
					<!-- 占位一个展示区 -->
					<router-view></router-view>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="App">
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