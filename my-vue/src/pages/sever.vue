<template>
	<div class="sever-top">
		<h3>服务中心</h3>
		<Footer-Content></Footer-Content> 
	</div>
</template>

<style>
	.sever-top{
		height: 4rem;
		background-color: #ccc;
		text-align: center;
	}
	.sever-top h3{
		line-height: 4rem;
		font-weight: 100;
		font-size: 2rem;
	}
</style>

<script type="text/javascript">
	import FooterContent from '../components/footer'

	export default{
		components:{
			FooterContent,
		}
	}
</script>