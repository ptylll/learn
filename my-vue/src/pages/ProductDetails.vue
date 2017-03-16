<template>
 	<transition name="bounce">
		<div class="product">
			<Top-Div></Top-Div>
		</div>
	</transition>	
</template>

<style scoped>
	.bounce-enter-active {
	  animation: bounce-in 0.2s ease;
	}

	@keyframes bounce-in {
	  0% {
	    transform: translateX(100px);
	    opacity: 0;
	  }
	  100% {
	     transform: translateX(0);
	     opacity: 1;
	  }
	}
</style>

<script type="text/javascript">
	import TopDiv from '../components/back'

	export default{
		components:{
			TopDiv,
		}
	}
</script>