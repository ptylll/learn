#### call apply bind

* apply 、 call 、bind 三者都是用来改变函数的this对象的指向的；

* apply 、 call 、bind 三者都可以利用后续参数传参；



##### call

语法 

call([thisObj[,arg1[, arg2[, [,.argN]]]]])
调用一个对象的一个方法，以另一个对象替换当前对象。

（1） 不传，或者传null,undefined， 函数中的this指向window对象<br/>
（2） 传递另一个函数的函数名，函数中的this指向这个函数的引用<br/>
（3） 传递字符串、数值或布尔类型等基础类型，函数中的this指向其对应的包装对象，如 String、Number、Boolean<br/>
（4） 传递一个对象，函数中的this指向这个对象<br/>

###### 实例
```
function foo1(){
  this.name = function(){
    console.log('foo1内置函数');
  }
}

function foo2(){
  foo1.call(this);//foo2代码执行后，当前的this指向了foo1(foo2继承了foo1)
}

var f= new foo2();
    f.name();//foo1内置函数
    
 ----------------------------
 
function person(age){
  this.age = age ;
  this.showName = function(){
      console.log(this.age);
  }
}
 function xiaoming(age){
    person.call(this,age)
 }    
 
 var pr = new xiaoming('18');
     pr.showName(); // 18
     
```
##### apply 

语法：

apply([thisObj[,argArray]])

定义 

应用某一对象的一个方法，用另一个对象替换当前对象。

如果 argArray 不是一个有效的数组或者不是 arguments 对象，那么将导致一个 TypeError。

###### 实例

```

function class1(args1,args2){       
  this.name=function(){      
   console.log(args1,args2);      
  }     
}     

function class2(){    
  var args1="1";
  var args2="2";
  class1.call(this,args1,args2);  
  /*或*/
  class1.apply(this,[args1,args2]);
}

var c=new class2();   
c.name();// 1,2


```

在JavaScript 中，某个函数的参数数量是不固定的，因此要说适用条件的话，当你的参数是明确知道数量时用 call ；而不确定的时候用 apply，然后把参数 push 进数组传递进去。当参数数量不确定时，函数内部也可以通过 arguments 这个数组来遍历所有的参数。


##### bind 

bind是es5 的扩展方法与apply call相似 也能改变函数内部的this指向

bind() 函数会创建一个新函数（称为绑定函数），新函数与被调函数（绑定函数的目标函数）具有相同的函数体（在 ECMAScript 5 规范中内置的call属性）。当新函数被调用时 this 值绑定到 bind() 的第一个参数，该参数不能被重写。绑定函数被调用时，bind() 也接受预设的参数提供给原函数。一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。提供的 this 值被忽略，同时调用时的参数被提供给模拟函数。

```
function list(){
   return Array.prototype.slice.call(arguments);
}

var list1 = list(1,2,3,4,5,6); // 1,2,3,4,5,6
var list2 = list.bind(undefined,89);//

var list3 = list2(); //89 
var list4 = list2(1,2,3,4)//[89, 1, 2, 3, 4]

```
参考

https://www.cnblogs.com/libin-1/p/6069031.html

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
