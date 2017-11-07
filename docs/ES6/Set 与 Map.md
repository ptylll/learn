1. Set常见属性

Set.prototype.constructor：构造函数，默认就是Set函数。
Set.prototype.size：返回Set实例的成员总数。

```
var set = new Set();

set.size //0 
set.constructor // Set(){}//

```
2.  Set 常见的方法(操作数据)

add(value)：添加某个值，返回Set结构本身。
delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
has(value)：返回一个布尔值，表示该值是否为Set的成员。
clear()：清除所有成员，没有返回值。

```
 var set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);
    
    set.has(2);//true
    set.delete(2);
    set.has(2);//false
    
    set.clear();
    
    set.has(1);//false
    set.has(2);//false
    
```

3.Array.from 可以将Set对象转化为数组

```
 var set = new Set([1,12,234,35,3456,4567,548,78]);
 var array = Array.from(set);
 
```
4. Set 遍历操作方法 

keys()：返回键名的遍历器
values()：返回键值的遍历器
entries()：返回键值对的遍历器
forEach()：使用回调函数遍历每个成员

keys()与values()方法行为完全一致
entries()返回键值与键名一致
```
 var set = new Set([1,2,3,4,56,7,8,9,10]);  
  for(var item of set.keys()){
    console.log(item);
  }//1,2,3,4,56,7,8,9,10
  
  
 var set = new Set([1,2,3,4,5]);  
  for(var item of set.entries()){
      console.log(item);
    }
 //[1,1]
 //[2,2]
 //[3,3]
 //[4,4]
 //[5,5]
   
  
```

5. Set应用

 5.1 通过与(...)结合除去 重复 
  
  ```
     var arr = [1,1,1,2,2,2,3,3,3,4,5,6,7,8];
     var unique = [... new Set(arr)];
     console.log(unique);//[1, 2, 3, 4, 5, 6, 7, 8]
     
  ```
 
 5.2 Set 实现 交集 并集 差集 
 
 ```
  var a = new Set([1,2,3,4,5]); 
  var b = new Set([2,3,4,5,6]);
  
  //并集
  
  var arr = new Set([...a , ...b]);
  
 ```
