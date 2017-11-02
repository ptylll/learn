### slice substring substr 三者区别 

1.slice substring substr 三者都是截取字符串 slice(start,[end]) substr(start,[end]) substring(start,length);
2.slice(0) substr(0) substring(0) 都返回 字符串本身;
3. slice(0) substring(0) 两者不包含 后面一位 substr 包含后一位
```
var str = '123456789';
str.slice(1,3);//
str.substr(1,3);//
str.substring(1,3);//
