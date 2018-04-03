js传统做法是当生成一个对象实例，需要定义构造函数，然后通过new的方式完成。


```
  function Person(){
    this.name="张三";
    this.age = 15,
  }
  
  Person.prtototype.getNames = function(){
    console.log('name：'+this.name)
  }
  
  var a = new Person();
      a.getNames();//张三
```

ES6 写法

```
class Person{
  constructor(){
    this.name="张三",
    this.age = 15
  }
  getNames(){
      console.log('name:'+this.name)
  }
}

var a = new Person();
    a.getNames();
```

在构造函数prototype上面的的属性都是存在的；

```
class Person{
  constructor() {
    // ...
  }

  toString() {
    // ...
  }

  toValue() {
    // ...
  }
}

Point.prototype = {
  constructor() {},
  toString() {},
  toValue() {},
};
//两者相等

```

### 生成类的实例对象的写法，与 ES5 完全一样，也是使用new命令。前面说过，如果忘记加上new，像函数那样调用Class，将会报错

```
  class Person{
    
  }
  var a = Person();//报错
  var a = new Person();//正确
  
```

### 类表达式

```
const People = class Person{
   getNames(){
    return Person.name
  }
}
var a = new People();
    a.getNames(); // Person
var b = new Person();
    b.getNames();//not defined
```

Person只在 Class 的内部代码可用，指代当前类

### 立即执行函数

```
 const People = new class{
     constructor(name) {
        this.name = name
     }
     
     getNames(){
        console.log(this.name)
     }
 }('张三');
  People.getNames();//张三
  
  ```
  
 ### extends继承
 
 ``` 
 class Parent{
    contructor(name,age){
        class Parent {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    speakSometing(){
        console.log("I can speek chinese");
    }
}
class Child extends Parent {//定义子类，继承父类
    coding(){
        console.log("coding javascript");
    }
}
var c = new Child();
//可以调用父类的方法
c.speakSometing(); // I can speek chinese

```

### class 存值取值get() set()

```
class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log('setter: '+value);
  }
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

inst.prop
// 'getter'

```

### class 静态方法

类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。

```
class People{
 constructor() {
    // ...
  }
  static  getName(){
    console.log('张三')
  }
};
People.getName();//张三
var a = new People();
    a.getName();// is not a function
    
```
###### 父类的静态方法，可以被子类继承。

```

class Foo {
  static classMethod() {
    return 'hello';
  }
}

class Bar extends Foo {
}

Bar.classMethod() // 'hello'

```
###### 静态方法也是可以从super对象上调用的。

```
class Foo {
  static classMethod() {
    return 'hello';
  }
}

class Bar extends Foo {
  static classMethod() {
    return super.classMethod() + ', too';
  }
}

Bar.classMethod() // "hello, too"

```

参考：http://es6.ruanyifeng.com/#docs/class
https://segmentfault.com/a/1190000007537173
