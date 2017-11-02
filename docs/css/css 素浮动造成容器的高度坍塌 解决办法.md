
```
<Div class="div01">
	<div class="div02"></div>
</Div>
.div01{
	background-color: #ccc;
	min-height: 50px;
	padding: 10px;
}
.div02{
	height: 100px;
	width: 100px;
	padding: 20px;
	float: left;
	background-color: #999;
}
.div01::after{
	content: "";
	display: table;
	clear: both;
}
```
