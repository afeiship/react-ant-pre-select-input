import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { Input } from 'antd';
import ReactAntSelect from 'react-ant-select';

export default class extends Component{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    value: PropTypes.array,
    onChange: PropTypes.func,
    Component: PropTypes.func
  };

  static defaultProps = {
    items: [],
    value: [],
    onChange: noop,
    Component: Input
  };
  /*===properties end===*/

  constructor(inProps){
    super(inProps);
    this.state = {
      value: inProps.value
    }
  }

  componentWillReceiveProps(inProps){
    const { value } = inProps;
    if( value !== this.state.value ){
      this.setState({ value });
    }
  }

  get selectView(){
    const { items, value } = this.props;
    return (
      <ReactAntSelect
        items={items}
        style={{width:120}}
        value={[value[0]]}
        onChange={this._onChange.bind(this, 0)}
        />
    );
  }

  _onChange = (inIndex, inEvent) => {
    const { value} = this.props;
    const { onChange } = this.props;
    value[inIndex] = inEvent.target.value;
    this.setState({ value },()=>{
      onChange({
        target: { value }
      });
    });
  };

  render(){
    const { className, onChange, Component, items, value, ...props } = this.props;
    return (
      <Component
        addonBefore={this.selectView}
        value={value[1]}
        onChange={this._onChange.bind(this,1)}
        className={classNames('react-ant-pre-select-input', className)}
        {...props} />
    );
  }
}
