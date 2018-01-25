<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>loading动画</title>
</head>
<style type="text/css">
	body{
		background-color:#006666;
	}
	*{padding: 0;margin:0 }
	.loading{
		height: 30px;
		width: 30px;
		margin: 200px;
		border: 3px solid rgba(255,255,255,0.5);
		border-top: 3px solid #fff;
		border-radius: 50%;
		-webkit-animation: spin 1s infinite linear;
		-moz-animation: spin 1s infinite linear;
		-o-animation: spin 1s infinite linear;
		animation: spin 1s infinite linear;
	}
	.db-loading:before{
		content:"";
		position: absolute;
		height: 20px;
		width: 20px;
		margin-left: 3px;
		margin-top: 3px;
		border: 2px solid rgba(255,255,255,0.5);
		border-top: 2px solid #fff;
		border-radius: 50%;
	}
	.loading-plush{
		height: 50px;
		width:3px;
		margin:200px;
		background-color:rgba(255,255,255,0.5); 
		-webkit-animation: sacle 1s 0.1s infinite cubic-bezier(.2, .68, .18, 1.08);
		-moz-animation: sacle 1s 0.1s infinite cubic-bezier(.2, .68, .18, 1.08);
		-o-animation: sacle 1s 0.1s infinite cubic-bezier(.2, .68, .18, 1.08);
		animation: sacle 1s 0.1s infinite cubic-bezier(.2, .68, .18, 1.08);
	}
	.loading-plush .loading-child:nth-child(1){
		position: absolute;
		height: 50px;
		width:3px;
		margin-left: 45px;
		background-color:rgba(255,255,255,0.5); 
		-webkit-animation: sacle 1s 0.4s infinite cubic-bezier(.2, .68, .18, 1.08);
		-moz-animation: sacle 1s 0.4s infinite cubic-bezier(.2, .68, .18, 1.08);
		-o-animation: sacle 1s 0.4s infinite cubic-bezier(.2, .68, .18, 1.08);
		animation: sacle 1s 0.4s infinite cubic-bezier(.2, .68, .18, 1.08);
	}
	.loading-plush .loading-child:nth-child(2){
		position: absolute;
		height: 50px;
		width:3px;
		margin-left: 60px;
		background-color:rgba(255,255,255,0.5); 
		-webkit-animation: sacle 1s 0.5s infinite cubic-bezier(.2, .68, .18, 1.08);
		-moz-animation: sacle 1s 0.5s infinite cubic-bezier(.2, .68, .18, 1.08);
		-o-animation: sacle 1s 0.5s infinite cubic-bezier(.2, .68, .18, 1.08);
		animation: sacle 1s 0.5s infinite cubic-bezier(.2, .68, .18, 1.08);
	}
	.loading-plush .loading-child:nth-child(3){
		position: absolute;
		height: 50px;
		width:3px;
		margin-left: 75px;
		background-color:rgba(255,255,255,0.5); 
		-webkit-animation: sacle 1s 0.6s infinite cubic-bezier(.2, .68, .18, 1.08);
		-moz-animation: sacle 1s 0.6s infinite cubic-bezier(.2, .68, .18, 1.08);
		-o-animation: sacle 1s 0.6s infinite cubic-bezier(.2, .68, .18, 1.08);
		animation: sacle 1s 0.6s infinite cubic-bezier(.2, .68, .18, 1.08);
	}
	.loading-plush .loading-child:nth-child(4){
		position: absolute;
		height: 50px;
		width:3px;
		margin-left: 90px;
		background-color:rgba(255,255,255,0.5); 
		-webkit-animation: sacle 1s 0.7s infinite cubic-bezier(.2, .68, .18, 1.08);
		-moz-animation: sacle 1s 0.7s infinite cubic-bezier(.2, .68, .18, 1.08);
		-o-animation: sacle 1s 0.7s infinite cubic-bezier(.2, .68, .18, 1.08);
		animation: sacle 1s 0.7s infinite cubic-bezier(.2, .68, .18, 1.08);
	}
	.loading-plush .loading-child:nth-child(5){
		position: absolute;
		height: 50px;
		width:3px;
		margin-left: 105px;
		background-color:rgba(255,255,255,0.5); 
		-webkit-animation: sacle 1s 0.8s infinite cubic-bezier(.2, .68, .18, 1.08);
		-moz-animation: sacle 1s 0.8s infinite cubic-bezier(.2, .68, .18, 1.08);
		-o-animation: sacle 1s 0.8s infinite cubic-bezier(.2, .68, .18, 1.08);
		animation: sacle 1s 0.8s infinite cubic-bezier(.2, .68, .18, 1.08);
	}
	.loading-plush .loading-child:nth-child(6){
		position: absolute;
		height: 50px;
		width:3px;
		margin-left: 120px;
		background-color:rgba(255,255,255,0.5); 
		-webkit-animation: sacle 1s 0.9s infinite cubic-bezier(.2, .68, .18, 1.08);
		-moz-animation: sacle 1s 0.9s infinite cubic-bezier(.2, .68, .18, 1.08);
		-o-animation: sacle 1s 0.9s infinite cubic-bezier(.2, .68, .18, 1.08);
		animation: sacle 1s 0.9s infinite cubic-bezier(.2, .68, .18, 1.08);
	}

	.loading-plush:before,.loading-plush:after{
		content:"";
		position: absolute;
		height: 50px;
		width:3px;
		background-color:rgba(255,255,255,0.5); 
	}
	.loading-plush:before{
		margin-left: 15px;
		animation: sacle 1s 0.3s infinite cubic-bezier(.2, .68, .18, 1.08);
	}
	.loading-plush:after{
		margin-left: 30px;
		animation: sacle 1s 0.2s infinite cubic-bezier(.2, .68, .18, 1.08);
	}
	.ball{
		position: relative;
		margin:0 auto; 
		perspective: 1500px;
	}
	.ball .ball-child{
		position: absolute;
		height: 200px;
		width: 200px;
		opacity: 0.3;
		border-radius: 100%;
		background-color: #fff;
	}
	.ball-big{   
		position: relative;
	    width: 200px;
	    height: 200px;
	    top:50%;
	    left: 50%;
	    perspective: 1500px;
	    animation: ball 7s infinite ease-out;
	    transform:translate(-50%,-50%);
	    transform-style: preserve-3d;
	}
	.ball .ball-child:nth-child(1){transform: rotateX(0deg);}
	.ball .ball-child:nth-child(2){transform: rotateX(30deg);}
	.ball .ball-child:nth-child(3){transform: rotateX(60deg);}
	.ball .ball-child:nth-child(4){transform: rotateX(90deg);}
	.ball .ball-child:nth-child(5){transform: rotateX(120deg);}
	.ball .ball-child:nth-child(6){transform: rotateX(150deg);}

	.bubble{
		position: relative;
		height: 200px;
		width:200px;
		margin:200px auto ; 
	}
	.bubble-child{
		position: absolute;
		height:60px;
		width:60px;
		border:3px solid #fff;
		border-radius: 50%;
	}
	.bubble .bubble-child:nth-child(1){
		transform: scale(0.2);
		animation: bubble 1.5s 0.3s infinite linear;
	}
	.bubble .bubble-child:nth-child(2){
		transform: scale(0.4);
		animation: bubble 1.5s 0.6s infinite linear;
	}
	.bubble .bubble-child:nth-child(3){
		transform: scale(0.6);
		animation: bubble 1.5s 0.9s infinite linear;
	}
	.bubble .bubble-child:nth-child(4){
		transform: scale(0.8);
		animation: bubble 1.5s 1.2s infinite linear;
	}
	.bubble .bubble-child:nth-child(5){
		transform: scale(1);
		animation: bubble 1.5s 1.5s infinite linear;
	}
	@-webkit-keyframes spin{
		0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);}
		100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg);}
	}
	@-moz-keyframes spin{
		0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);}
		100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg);}
	}
	@-o-keyframes spin{
		0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);}
		100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg);}
	}

	@keyframes sacle{
		0%{-webkit-transform:scaleY(1);-moz-transform:scaleY(1);-o-transform:scaleY(1);transform:scaleY(1);}
		50%{-webkit-transform:scaleY(0.4);-moz-transform:scaleY(0.4);-o-transform:scaleY(0.4);transform:scaleY(0.4);}
		100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1);}
	}
	@-webkit-keyframes sacle{
		0%{-webkit-transform:scaleY(1);-moz-transform:scaleY(1);-o-transform:scaleY(1);transform:scaleY(1);}
		50%{-webkit-transform:scaleY(0.4);-moz-transform:scaleY(0.4);-o-transform:scaleY(0.4);transform:scaleY(0.4);}
		100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1);}
	}
	@-moz-keyframes sacle{
		0%{-webkit-transform:scaleY(1);-moz-transform:scaleY(1);-o-transform:scaleY(1);transform:scaleY(1);}
		50%{-webkit-transform:scaleY(0.4);-moz-transform:scaleY(0.4);-o-transform:scaleY(0.4);transform:scaleY(0.4);}
		100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1);}
	}
	@-o-keyframes sacle{
		0%{-webkit-transform:scaleY(1);-moz-transform:scaleY(1);-o-transform:scaleY(1);transform:scaleY(1);}
		50%{-webkit-transform:scaleY(0.4);-moz-transform:scaleY(0.4);-o-transform:scaleY(0.4);transform:scaleY(0.4);}
		100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1);}
	}
	@keyframes sacle{
		0%{-webkit-transform:scaleY(1);-moz-transform:scaleY(1);-o-transform:scaleY(1);transform:scaleY(1);}
		50%{-webkit-transform:scaleY(0.4);-moz-transform:scaleY(0.4);-o-transform:scaleY(0.4);transform:scaleY(0.4);}
		100%{-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1);}
	}
    @keyframes ball {
	0% {
		transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg);
	}
	25% {
		transform: rotateY(45deg) rotateX(180deg) rotateZ(20deg);
	}
	50% {
		transform: rotateY(225deg) rotateX(0deg) rotateZ(90deg);
	}
	75% {
		transform: rotateY(0deg) rotateX(45deg) rotateZ(120deg);
	}
	100% {
		transform: rotateY(0deg) rotateX(0deg) rotateZ(0deg);
	}
}

	@keyframes bubble{
		0%{opacity: 1}
		50%{opacity: 0.5}
		100%{opacity: 0}
	}
	@-webkit-keyframes bubble{
		0%{opacity: 1}
		50%{opacity: 0.5}
		100%{opacity: 0}
	}
	@-moz-keyframes bubble{
		0%{opacity: 1}
		50%{opacity: 0.5}
		100%{opacity: 0}
	}
	@-ms-keyframes bubble{
		0%{opacity: 1}
		50%{opacity: 0.5}
		100%{opacity: 0}
	}
	@-o-keyframes bubble{
		0%{opacity: 1}
		50%{opacity: 0.5}
		100%{opacity: 0}
	}
</style>
<body>
	<div class="loading"></div>
	<div class="loading-plush">
		<div class="loading-child"></div>
		<div class="loading-child"></div>
		<div class="loading-child"></div>
		<div class="loading-child"></div>
		<div class="loading-child"></div>
		<div class="loading-child"></div>
	</div>
	<div class="loading db-loading"></div>
	<div class="ball">
		<div class="ball-big">
			<div class="ball-child"></div>
			<div class="ball-child"></div>
			<div class="ball-child"></div>
			<div class="ball-child"></div>
			<div class="ball-child"></div>
			<div class="ball-child"></div>
		</div>
	</div>
	<div class="bubble">
		<div class="bubble-child"></div>
		<div class="bubble-child"></div>
		<div class="bubble-child"></div>
		<div class="bubble-child"></div>
		<div class="bubble-child"></div>
	</div>
</body>
</html>
