# react-ant-pre-select-input
> Pre select input component for react

## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    value: PropTypes.array,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
    Component: PropTypes.func,
  };

  static defaultProps = {
    items: [],
    value: [],
    onChange: noop,
    onClear: noop,
    Component: Input,
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-ant-pre-select-input --registry=https://registry.npm.taobao.org
```

```js
import ReactAntPreSelectInput from 'react-ant-pre-select-input';
```

```scss
// customize your styles:
$react-ant-pre-select-input-options:(
);

@import 'node_modules/react-ant-pre-select-input/dist/style.scss';
```


## usage:
```jsx

// install: npm install afeiship/react-ant-pre-select-input --save
// import : import ReactAntPreSelectInput from 'react-ant-pre-select-input'

class App extends React.Component{
  state = {
    checked:false,
    items:[
      {
        value: 'http',
        label: 'http://'
      },
      {
        value: 'https',
        label: 'https://'
      }
    ],
    value:['http','www.baidu.com']
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = e =>{
    console.log(e.target.value);
    // this.setState({ value: e.target.value });
  };

  _onChange2 = checked =>{
    console.log(checked);
    this.setState({ checked });
  };

  eventValue = e =>{
    return {
      [e[0]]:e[1]
    };
  };


  render(){
    const { checked, value } = this.state;
    return (
      <div className="hello-react-ant-pre-select-input">
        <ReactAntPreSelectInput
          Component={Input.Search}
          enterButton
          eventValue={this.eventValue}
          items={this.state.items}
          value={value}
          onChange={this._onChange} ref='rc' />
      </div>
    );
  }
}

```
