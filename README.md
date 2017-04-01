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
