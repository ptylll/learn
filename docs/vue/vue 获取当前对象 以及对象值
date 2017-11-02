### vue
 ##### vue 获取当前对象 以及对象值(部分代码)
 ```
	<div id="wrap" class="wrap">
		<div class="wrap-box" v-for="item in news">
			<div class="wrap-left" :id='item.id' @click="show($event)">
				<div class="wrap-img"><img :src='item.url'></div>
				<div>{{item.title}}</div>
			</div>
		</div>
	</div>
	methods:{
		show:function(event){
			console.log(event.currentTarget);
		}
	}
```	
 详见官网（https://cn.vuejs.org/v2/guide/events.html#方法事件处理器）	
