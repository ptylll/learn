#### css hack
###### 1.条件注释法 

```
只在IE下生效 
<!--[if IE]> 
这段文字只在IE浏览器显示 
<![endif]--> 
```
```
只在IE6下生效 
<!--[if IE 6]> 
这段文字只在IE6浏览器显示 
<![endif]--> 
```
```
只在IE6以上版本生效 
<!--[if gte IE 6]> 
这段文字只在IE6以上(包括)版本IE浏览器显示 
<![endif]--> 
```
```
只在IE8上不生效 
<!--[if ! IE 8]> 
这段文字在非IE8浏览器显示 
<![endif]--> 
```
```
非IE浏览器生效 
<!--[if !IE]> 
这段文字只在非IE浏览器显示 
<![endif]--> 
```
######2.类内属性前缀法 

```
“-″减号是IE6专有的hack 
“\9″ IE6/IE7/IE8/IE9/IE10都生效 
“\0″ IE8/IE9/IE10都生效，是IE8/9/10的hack 
“\9\0″ 只对IE9/IE10生效，是IE9/10的hack 
```
###### demo
```
    background-color:red; /* All browsers */  
    background-color:blue !important;/* All browsers but IE6 */  
    *background-color:black; /* IE6, IE7 */  
    +background-color:yellow;/* IE6, IE7*/  
    background-color:gray\9; /* IE6, IE7, IE8, IE9, IE10 */  
    background-color:purple\0; /* IE8, IE9, IE10 */  
    background-color:orange\9\0;/*IE9, IE10*/  
    _background-color:green; /* Only works in IE6 */  
    *+background-color:pink; /*  WARNING: Only works in IE7 ? Is it right? */ 
```    
