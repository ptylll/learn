<template>
	<div class="header">
		<a class="logo" href="###">DEMO</a>
		<div >
			<span class="menu" id="menu" v-on:click="menuShow()"></span>
			<ul class="menus">
				<li class="menus-list" v-show="toggle" v-for = "menu in menus">{{menu.tag}}</li>
			</ul>
		</div>	
	</div>
</template>

<style scoped>
	.header{
		position: relative;
		width: 100%;
		height: 4rem;
		background-color: #46a1e5;
		text-align: center;
	}
	.logo{
		color: #fff;
		line-height: 4rem;
		font-size: 2rem;
		display:block;
	}
	.menu{
		position: absolute;
		width:3rem;
		height: 2.5rem;
		top:0.8rem;
		right: 0.3rem;
		background-image: url(../assets/img/menu-button-bg.png);
		background-repeat: no-repeat;
		background-size: 80%;
		background-position: center;
	}
	.menus{
		position: absolute;
		width: 100%;
		right: 0;
		max-width:11rem;
		float: right;
		background-color: #46a1e5;
	}
	.menus li{
		font-size: 1.5rem;
		color: #fff;
		padding: .5rem 0;
	}
</style>

<script>

	  export default{
	  	data (){
	  		return {
	  			menus:[
		  			{
		  				tag:"首页",
		  			},
	  				{
		  				tag:"新闻中心",
		  			},
	  				{
		  				tag:"关于我们",
		  			},
	  				{
		  				tag:"服务中心",
		  			}
	  			],
	  			toggle:false,
	  		}
	  	},
	  	methods:{
	  		menuShow:function(event) {
	  			console.log(this.toggle);
	  			this.toggle = !this.toggle;
	  		}
	  	}
	  }

</script>