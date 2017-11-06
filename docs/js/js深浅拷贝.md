
##### 对象深拷贝

1. for in
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
2. es6 ...

```
 var a = {
    b:12,
    c:14,
    d:15	
 };
var {...b} = a;
a.
console.log(a);//{b: 12, c: 14, d: 15}
console.log(b);//{b: 12, c: 14, d: 15}

```
##### 对象浅拷贝

```
 var a = {
    b:12,
    c:14,
    d:15	
 };
var b = a;
a.b = 100;
console.log(a);//{b: 100, c: 14, d: 15}
console.log(b);//{b: 100, c: 14, d: 15}
```
##### 数组 深拷贝方法 

### 1. silce();

```
var a = [1,23,4,5,58];
var b = a.slice(0);
b[0] = 11;
console.log(a);//[1,23,4,5,58]
console.log(b);//[11,23,4,5,58]

```
### 2.concat()

```
var a = [1,2,3,4,5,6];
var b = a.concat();
b[0]=9;
console.log(a);//[1,2,3,4,5,6]
console.log(b);//[9,2,3,4,5,6]

```
### 3. for 循环

```
var a = [1,2,3,4];
var b = [];
for(var i = 0 ; i < a.length; i++){
	b.push(a[i]);
}
a[0] = 12;
console.log(a);//[12, 2, 3, 4]
console.log(b);//[1, 2, 3, 4]
```
### 4. es6 ... 

```
var a = [1,2,3,4,5,6,7,8,9];
var [...b] = a;
b[0] = 100;
console.log(a);//[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(b);// [100, 2, 3, 4, 5, 6, 7, 8, 9]

```
##### 数组 浅拷贝方法

``` 
var a = [1,2];
var b = a;
a[0] = 10;
console.log(a);//[10,2]
console.log(b);//[10,2]

```
