import './dev.scss';
import ReactAntPreSelectInput from './main';
import { Input } from 'antd';
/*===example start===*/

// install: npm install afeiship/react-ant-pre-select-input --save
// import : import ReactAntPreSelectInput from 'react-ant-pre-select-input'

class App extends React.Component{
  state = {
    items:[
      {
        value: '1',
        label: 'http'
      },
      {
        value: '2',
        label: 'https'
      }
    ],
    value:['1','www.baidu.com']
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

  render(){
    const { value } = this.state;
    return (
      <div className="hello-react-ant-pre-select-input">
        <ReactAntPreSelectInput
          Component={Input.Search}
          enterButton
          items={this.state.items} value={value} onChange={this._onChange} ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
