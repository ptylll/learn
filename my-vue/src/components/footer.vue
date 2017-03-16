<template>
	<div class="footer">
		<router-link to="./#" class="iconfont">首页</router-link>
		<router-link to="./New" class="iconfont">新闻中心</router-link>
		<router-link to="./Sever"class="iconfont">联系我们</router-link>
	</div>
</template>

<style scoped>
   @import '../../dist/css/icon/iconfont.css';

	.footer{
		position: fixed;
		width: 100%;
		height: 4rem;
		line-height: 4rem;
		bottom: 0;
		background-color: #46a1e5;
		display: flex;
	}
	.footer a{
		flex-grow: 1;
		text-align: center;
		color: #fff;
		font-size: 2rem
	}
	.footer a:before{
		position: relative;
		height: 2rem;
		width: 2rem;
		margin: 0 0.8rem;
	    font-size: 2rem;	
	}
	.footer a:nth-child(1)::before{
	    content: "\e622";
	}
	.footer a:nth-child(2)::before{
		content: "\e684"; 
	}
	.footer a:nth-child(3)::before{
		content: "\e655";
	}
</style>

<script>

</script>