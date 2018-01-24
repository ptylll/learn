
### React PropTypes 

React 内置了类型检测的功能。要在组件中进行类型检测，你可以赋值 propTypes 属性。

```
  import PropTypes from 'prop-types';

  class Greeting extends React.Component {
    render() {
      return (
        <h1>Hello, {this.props.name}</h1>
      );
    }
  }

  Greeting.propTypes = {
    name: PropTypes.string
  };

```

PropTypes 输出了一系列的验证器，可以用来确保接收到的参数是有效的。例如，我们可以使用PropTypes.string 语句。当给 prop 传递了一个不正确的值时，JavaScript控制台将会显示一条警告。出于性能的原因，`propTypes 仅在开发模式中检测`。



参考：
* http://www.css88.com/react/docs/typechecking-with-proptypes.html
