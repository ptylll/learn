
##### js对象深拷贝
```
function DeepExtend(p,c){
	var c = c || {};
	for (var prop in p) {
		if(typeof p[prop] === "object"){
			c[prop] = (p[prop].constructor === Array) ? [] : {};
			DeepExtend(p[prop],c[prop]);
		}else{
			c[prop] = p[prop];
		}
	}
	return c;
}	
```
##### 数组 深拷贝方法 

1. silce();

```
