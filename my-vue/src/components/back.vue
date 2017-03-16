<template>
	<div class="back">
		产品详情页
		<h1 class="back-go" v-on:click="goback">返回</h1>
	</div>
</template>

<style scoped>
	.back{
		position: relative;
		height: 4rem;
		width: 100%;
		line-height: 4rem;
		font-size: 2rem;
		color: #333;
		text-align: center;
		background-color: #ccc;
	}
	.back-go{
		position: absolute;
		left: 1rem;
		top: 0rem;
		font-size: 1.3rem;
		line-height: 4rem;
		font-weight: 400;
	}
</style>
<script type="text/javascript">
	export default{
		methods:{
			goback(){
				window.history.back();
			} 
		}
	}
</script>