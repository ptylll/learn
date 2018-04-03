Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程，
即是对目标对象的属性读取、设置，亦或函数调用等操作进行拦截（处理）。

```
let proxy = new Proxy(target,handle)
```
target为目标对象，可以为一个空对象即（target={}），也可以是一个含有属性和方法的对象。
handle参数也是一个对象，用来定制拦截行为。

```
var obj = new Proxy({}, {
  get: function (target, key, receiver) {
    console.log(`getting ${key}!`);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, receiver) {
    console.log(`setting ${key}!`);
    return Reflect.set(target, key, value, receiver);
  }
});

```

如果handler没有设置任何拦截，那就等同于直接通向原对象。

```
var target = {};
var handle = {};
var proxy = new Proxy(target,handle);
    proxy.a = 'b';
    target.a //b
```    
