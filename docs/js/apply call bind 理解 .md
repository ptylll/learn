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
