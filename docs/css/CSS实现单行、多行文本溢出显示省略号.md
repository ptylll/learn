##### CSS实现单行、多行文本溢出显示省略号
``` 
1.
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;//行数
	overflow: hidden;
	//适用于手机
2.
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
	
```
