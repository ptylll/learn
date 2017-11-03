### slice substring substr 三者区别 

1.slice substring substr 三者都是截取字符串 slice(start,[end]) substr(start,[end]) substring(start,length);

2.slice(0) substr(0) substring(0) 都返回 字符串本身;

```
 var str = '456';
 str.slice(0);//456
 str.substr(0);//456
 str.substring(0);//456
```
3. slice(1,2) substring(1,2) 两者不包含 后面一位 substr(1,2) 包含后一位

```
var str = '123456789';
str.slice(1,3);//23
str.substr(1,3);//234
str.substring(1,3);//23

```
4.当参数为一个值的时候 三者都从n开始到结束截取字符串

```
 var str ='456789';
 str.slice(4);//89
 str.substring(4);//89
 str.substr(4);//89
 
 ```
 5.当为一个值而且是负值的时候 substring会把负值转化为0 返回整个字符串 slice 和 substr 回从最一位开始截取
 
 ```
 var str ='456789';
 str.slice(-2);//89
 str.substr(-2);//89
 str.substring(-2);//456789

 
 ```
