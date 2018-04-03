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

```
