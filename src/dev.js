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

  eventValue = e =>{
    return {
      [e[0]]:e[1]
    };
  };


  render(){
    const { value } = this.state;
    return (
      <div className="hello-react-ant-pre-select-input">
        <ReactAntPreSelectInput
          Component={Input.Search}
          enterButton
          eventValue={this.eventValue}
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
