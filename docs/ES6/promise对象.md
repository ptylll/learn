### ES6 promise对象

##### Promise 对象用于表示一个异步操作的最终状态（完成或失败），以及其返回的值。

   1. 对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称 Fulfilled）和Rejected（已失败）     
   2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果。
	
```
var promise = new Promise(function(resolve, reject) {
	  // ... some code

  if (/* 异步操作成功 */){
    resolve(value);
  } else {
    reject(error);
  }
});

function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

timeout(100).then((value) => {
  console.log(value);
});
```
