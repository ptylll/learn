<template>
	<div class="news">
		<h3>新闻中心</h3>
		<Footer-Content></Footer-Content> 
	</div>
</template>

<style>
	.news{
		height: 4rem;
		background-color: #ccc;
	}
	.news h3{
		line-height: 4rem;
		font-size: 2rem;
		font-weight: 400;
		text-align: center;
	}
</style>

<script>
	import FooterContent from '../components/footer'
	export default{
		components:{
			FooterContent,
		}
	}
</script>