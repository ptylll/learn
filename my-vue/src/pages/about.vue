<template>
	<div class="about-top">
		<h3>关于我们</h3>
		<Footer-Content></Footer-Content> 
	</div>
</template>

<style scoped>
	.about-top{
		height: 4rem;
		background-color: #ccc;
	}
	.about-top h3{
		line-height: 4rem;
		font-size: 2rem;
		font-weight: 400;
		text-align: center;
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