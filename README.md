#前端学习地址
## webpack
| 地址 | 地址  |
| :------------: |:---------------:|
| [webpack中文网](http://webpackdoc.com/module-system.html)| [webpack官网](http://webpack.github.io/docs/) |
| col 2 is      | centered        |
| zebra stripes | are neat        |
## vue
| 地址 | 地址  |
| :------------: |:---------------:|
| [vue中文网](http://cn.vuejs.org/)| [入门实例](http://blog.csdn.net/u013182762/article/details/53027883) |

### css
|地址 | 地址 |
| :------------: |:---------------:|
| [偏门却又实用的 CSS 样式](http://www.ctolib.com/topics-112966.html) | [CSS选择器速查表](http://www.ctolib.com/cheatsheets-css-selector.html) 
### js轮播图插件
| 地址 | 地址 |
| :------------------------------: | :---------------------------------------: |
| [兼容到IE6的轮播](http://www.jq22.com/jquery-info17)|
##### 除去input代码点击灰色背
```
  * {
      -webkit-tap-highlight-color:rgba(0,0,0,0);
      -o-tap-highlight-color:rgba(0,0,0,0);
      -ms-tap-highlight-color:rgba(0,0,0,0);
      -moz-tap-highlight-color:rgba(0,0,0,0);/*ios点击有灰色背景*/

      }
```
##### user-select 禁止用户选中文本
```
    div {
        user-select: none; /* Standard syntax */
    }
  ```  
##### -webkit-font-smoothing 字体抗锯齿
none                                     ------ 对低像素的文本比较好 
subpixel-antialiased                ------默认值 
antialiased                             ------抗锯齿很好 
 ``` 
   div {
        -webkit-font-smoothing: antialiased; 
    }
  ```
##### [background:linear-gradient斜向线性渐变](http://www.jcodecraeer.com/a/cssjiqiaoyuguifan/2012/0811/341.html)

要创建一个线性渐变，您需要设置一个起点和一个渐变的方向（或角度），并定义起止颜色。
```
-moz-linear-gradient( [<point> || <angle>,]? <stop>, <stop> [, <stop>]* )
```
##### css公用样式项目样式初始化
```
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins,
kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody,
tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time,
mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 14px;
    font-family: "Microsoft YaHei","微软雅黑","Helvetica Neue",Helvetica,"Hiragino Sans GB",Arial,sans-serif;
}
body,html{
    width: 100%;
    height:100%;
}
input:hover{
    opacity:0.9;
}
li{
    list-style: none;
}
a,input{outline:none;}
a{
    text-decoration: none;
    color:#333333;
}
a:hover{
    text-decoration: none;
}
*{
    padding: 0;
    margin:0; 
}
```
##### 浏览器内核默认高版本控制
```
 <meta name="renderer" content="webkit">
 <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" >
```
##### git本地代码提交仓库

```
gicle//初始化目录
git init 

//把所有内容添加到索引库中
$git add .

//同步线上库到本地（新添加项目）
$git pull --rebase origin master

//提交到本地仓库，分号中是针对要提交文件的描述
$git commit -m "随便写"

//如果远程origin已经存在，先删除远程origin，或者改用别的名字
$git remote rm origin

//关联远程仓库git
$git remote add origin git@github.com:名字/库名.git

//提交本地仓库到远程仓库主干中
$git push -u origin master
```
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
