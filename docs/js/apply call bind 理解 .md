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
