### redux 简单demo 
#### 安装第三方模块

npm install --save redux

npm install --save react-redux

npm install --save react-router

#### 1.0 Store 
 Store 保存数据 相当于一个容器（整个项目里只能有一个Store包含所有数据）
* Redux 中利用createStore这个函数创建Store <br/> 
* 维持应用的 state；<br/>
* 提供 getState() 方法获取 state；<br/>
* 提供 dispatch(action) 方法更新 state；<br/>
* 通过 subscribe(listener) 注册监听器;<br/>
* 通过 subscribe(listener) 返回的函数注销监听器。<br/>
 ```
 import {createStore} from 'redux';
 const store = createStore(fn);
 ```
#### 1.1 State 

Store对象包含所有数据。如果想得到某个时点的数据，就要对 Store 生成快照。这种时点的数据集合，就叫做 State。

```
  import { createStore } from 'redux';
  const store = createStore(fn);
  const state = store.getState();
```
一个State 对应一个View，只要State相同View就相同。

#### 1.2 Action

State 的变化，会导致 View 的变化。但是，用户接触不到 State，只能接触到 View。所以，State 的变化必须是 View 导致的。Action 就是 View 发出的通知，表示 State 应该要发生变化了。

```
 const changeTextAction = {
  type:'CHANGE_TEXT'
}
const buttonClickAction = {
  type:'BUTTON_CLICK'
}
const onButtonLgAction ={
  type:'BUTTON_LGCLICK'
}

```
上面代码 三个Action 分别为 `CHANGE_TEXT` ` BUTTON_CLICK ` `BUTTON_LGCLICK`，
Action 描述当前发生的事情。改变 State 的唯一办法，就是使用 Action。它会运送数据到 Store。


#### 1.3  Reducer

  Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。
  
  ```
  const initialState = { // State的默认值
    text:0
  }
  const reducer = (state = initialState,action) =>{
    switch(action.type){
      case "CHANGE_TEXT":
        return{
            text:state.text == 'Hello' ? 'world' : 'HELLO'   
        }
      case 'BUTTON_CLICK':
          return{
            text:state.text + 1
          }

      case 'BUTTON_LGCLICK':
          return{
            text:state.text + 10
          }    
      default:
          return initialState;
    }
  }

  ```
  上面代码 reducer 接收到 `CHANGE_TEXT` `BUTTON_LGCLICK` `BUTTON_LGCLICK` 任意一个Action 以后返回相对应的state

#### 1.4 connect() 
  
  React-Redux 提供connect方法，用于从 UI 组件生成容器组件。connect的意思，就是将这两种组件连起来。
  
  ```
    import { connect } from 'react-redux'
    App = connect(mapStateToProps, mapDispatchToProps)(App)  
    
  ```
  上面代码接受两个参数：`mapStateToProps` `mapDispatchToProps` 前者负责输入逻辑,后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action
  
  #### 1.5 mapStateToProps()
  
  
#### 实例
```
import React, { Component } from 'react';  
import ReactDOM from 'react-dom';  
import { createStore } from 'redux';  
import { Provider, connect } from 'react-redux';  

class App extends Component{
  render(){
    const {text,onChangeText,onButtonClick,onButtonLgClick} = this.props;
    return(
        <div>
            <h1 onClick={onChangeText}>{text}</h1>
            <button onClick={onButtonClick}>clicke me</button>
            <button onClick={onButtonLgClick}>clicke me + 10</button>
        </div>
    )
  }
}

//action
const changeTextAction = {
  type:'CHANGE_TEXT'
}
const buttonClickAction = {
  type:'BUTTON_CLICK'
}
const onButtonLgAction ={
  type:'BUTTON_LGCLICK'
}

//reducer  处理逻辑
const initialState = {
  text:0
}
const reducer = (state = initialState,action) =>{
  switch(action.type){
    case "CHANGE_TEXT":
      return{
          text:state.text == 'Hello' ? 'world' : 'HELLO'   
      }
    case 'BUTTON_CLICK':
        return{
          text:state.text + 1
        }
    
    case 'BUTTON_LGCLICK':
        return{
          text:state.text + 10
        }    
    default:
        return initialState;
  }
}

//创建store
let store = createStore(reducer);

//映射Redux state到组件的属性  
function mapStateToProps(state){
  return {text:state.text}
}

//映射Redux actions到组件的属性  
function mapDispatchToProps(dispatch){
  return{
    onButtonClick:() =>dispatch(buttonClickAction),
    onChangeText:() =>dispatch(changeTextAction),
    onButtonLgClick:() =>dispatch(onButtonLgAction),
  }
}

//连接组件  
App = connect(mapStateToProps, mapDispatchToProps)(App)  

//渲染组件  
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
  ,document.getElementById('root')
)
```
