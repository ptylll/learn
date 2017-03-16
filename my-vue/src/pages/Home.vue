<template>
	<transition name="bounce">
		<div>
			<Header-Home></Header-Home>
			<Swiper-Img></Swiper-Img>
			<Abouts-Div></Abouts-Div>
			<div class="index-abouts">
				<div class="index-abouts-list">
					<span class="index-abouts-text">之前项目用的是做单页应用，用的restful进行数据交互显示,逻辑和控制dom元素都写在一起，而且每次改变都要update,功能一复杂代码就很乱，还有一些其他问题。</span>
					<router-link to="./About" class="more">了解更多</router-link>
				</div>
			</div>
			<div class="index-product">
				<div class="index-product-list" v-for="product in products">
					<router-link to="./ProductDetails"><img style="height:100%;width:100%;" :src="product.img"></router-link>
					<p class="index-product-text">{{product.title}}
						<router-link to="./ProductDetails" class="index-product-more">详情</router-link>
					</p>
				</div>
			</div>
			<Server-Div></Server-Div>
			<div class="sever">
				<p class="sever-img"><img src="../assets/img/sy-service-pic01.jpg">	</p>
			</div>
			<div class="server-content">
				<p class="sever-content-list img01">全国联保</p>
				<p class="sever-content-list img02">尊享服务</p>
				<p class="sever-content-list img03">常见问题</p>
			</div>
			<div class="index-news">
				<div class="news">
					<h1>新闻中心/News</h1>
					<router-link to="./New" class="link-more">更多>></router-link>
				</div>
				<div class="index-news">
					<div class="index-news-list">
						<div class="index-news-content">
							<div class="index-news-txt">
								<h3>孙日贵董事长被聘为特邀副会长</h3>
								<span>2016年孙日贵董事长被特聘为中国纺织业联合会特瓶会长孙日贵董事长被特聘为中国纺织业联合会特瓶会长孙日贵董事长被特聘为</span>
								<span>2016-12-17</span>
							</div>
						</div>
					</div>
					<div class="index-news-list">
						<div class="index-news-content">
							<div class="index-news-txt">
								<h3>孙日贵董事长被聘为特邀副会长</h3>
								<span>2016年孙日贵董事长被特聘为中国纺织业联合会特瓶会长孙日贵董事长被特聘为中国纺织业联合会特瓶会长孙日贵董事长被特聘为</span>
								<span>2016-12-17</span>
							</div>
						</div>
					</div>
					<div class="index-news-list">
						<div class="index-news-content">
							<div class="index-news-txt">
								<h3>孙日贵董事长被聘为特邀副会长</h3>
								<span>2016年孙日贵董事长被特聘为中国纺织业联合会特瓶会长孙日贵董事长被特聘为中国纺织业联合会特瓶会长孙日贵董事长被特聘为</span>
								<span>2016-12-17</span>
							</div>
						</div>
					</div>
					<div class="index-news-list">
						<div class="index-news-content">
							<div class="index-news-txt">
								<h3>孙日贵董事长被聘为特邀副会长</h3>
								<span>2016年孙日贵董事长被特聘为中国纺织业联合会特瓶会长孙日贵董事长被特聘为中国纺织业联合会特瓶会长孙日贵董事长被特聘为</span>
								<span>2016-12-17</span>
							</div>
						</div>
					</div>
					<div class="index-news-list">
						<div class="index-news-content">
							<div class="index-news-txt">
								<h3>孙日贵董事长被聘为特邀副会长</h3>
								<span>2016年孙日贵董事长被特聘为中国纺织业联合会特瓶会长孙日贵董事长被特聘为中国纺织业联合会特瓶会长孙日贵董事长被特聘为</span>
								<span>2016-12-17</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer-Content></Footer-Content> 
		</div>
	</transition>	
</template>
<style scoped>
	.index-abouts{
		width: 100%;
	}
	.index-abouts-list{
		position: relative;
		width: 95%;
		margin: 0.8rem auto;
		padding: 0 0.2rem;
		background-image: url(../assets/img/sy-about-pic01.jpg);
		background-size: 96px 96px;
		background-repeat: no-repeat;
	}
	.index-abouts-text{
		position: relative;
		margin-left: 100px;
		vertical-align: top;
		white-space: normal;
		line-height: 1.5rem;
		min-height: 8rem;
		display:block;
	}
	.more{
		position: absolute;
		right: 0;
		bottom:0;
		color: #fff;
		padding: 0.5rem;
		background-color: #f00;
	}
	.index-product{
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		background-color: #EBEBEB;
	}
	.index-product-list{
		position: relative;
		width: 46%;
		height: 160px;
		margin: 0.5rem 2%;
		background-image: url(../assets/img/sy-about-pic01.jpg);
		background-repeat: no-repeat;
		background-size: contain;
	}
	.index-product-text{
		position: absolute;
		bottom:0;
		width: 100%;
		text-indent: 0.5rem;
		padding: 0.3rem 0;
		color: #fff;
		background-color: rgba(0,0,0,0.5);
		/* border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px; */
	}
	.index-product-more{
		position: absolute;
		color: #fff;
		right: 1rem;
	}
	.server{
		width: 100%;
	}
	.sever-img{
		margin-top: 2rem;
	}
	.sever-img img{
		width: 100%;
	}
	.server-content{
		width: 100%;
		margin: 1rem 0;
		display: flex;
	}
	.sever-content-list{
		display: block;
		padding-top: 5.5rem;
		flex-grow: 1;
		flex-wrap: nowrap;
		text-align: center;
		font-size: 1.8rem;
		background-size: 60px 60px;
		background-repeat: no-repeat;
		background-position: top;
	}
	.img01{
		color:#1A9CFF;
		background-image: url(../assets/img/icon-service01.png);
	}
	.img02{
		color:#FF0707;
		background-image: url(../assets/img/icon-service02.png);
	}
	.img03{
		color:#FF0EDA;
		background-image: url(../assets/img/icon-service03.png);
	}

	.news{
		width: 100%;
		position: relative;
	}
	.news h1{
		line-height: 4rem;
		color: #999;
		font-weight: 400;
		font-size:1.8rem;
		text-align: center;
		border-bottom: 1px solid #ccc
	}
	.news a{
		position: absolute;
		right: 0.5rem;
		top: 1rem;
		font-size: 1.4rem;
	}
	.index-news{
		width: 100%;
	}
	.index-news-list{
		padding: 0.5rem 0.3rem;
		border-bottom: 1px solid #ccc;
	}
	.index-news-content{
		width: 100%;
		min-height: 8rem;
		padding: 0.1rem 0;
		background-image: url(../assets/img/sy-news-pic01.jpg);
		background-repeat: no-repeat;
		background-size: 160px 160px;
		background-position: left;
		
	}
	.index-news-txt{
		margin-left: 170px;
		margin-right: 0.2rem;
		line-height: 1.6rem;
	}
	.index-news{
		margin-bottom: 5rem;
	}
	.bounce-enter-active {
	  animation: bounce-in 0.2s ease;
	}

	@keyframes bounce-in {
	  0% {
	    transform: translateX(-1000px);
	    opacity: 0;
	  }
	  100% {
	     transform: translateX(0);
	     opacity: 1;
	  }
	}
</style>

<script>
	
	import HeaderHome from '../components/header'
	import FooterContent from '../components/footer'
	import SwiperImg from '../components/swiper'
	import AboutsDiv from '../components/abouts'
	import ServerDiv from '../components/server'

	export default{
		data (){
			return {
				products:[]
			}
		},
		components:{
			HeaderHome,
			FooterContent,
			SwiperImg,
			AboutsDiv,
			ServerDiv
		},
		created(){
			    this.$http.get('/api/books').then((data) => {
                this.products = data.body.data;  
            }) 
		}
	}
</script>