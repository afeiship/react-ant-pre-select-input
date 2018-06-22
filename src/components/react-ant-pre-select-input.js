import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import { Input } from 'antd';
import ReactAntSelect from 'react-ant-select';
import nx from 'next-js-core2';
import { returnEventTarget } from 'next-return-event';
const EMPTY_STR = '';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    value: PropTypes.array,
    emptyWhenChange: PropTypes.bool,
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
    emptyWhenChange: false
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    this.state = {
      value: inProps.value
    }
  }

  componentWillReceiveProps(inProps) {
    const { value } = inProps;
    if (value !== this.state.value) {
      this.setState({ value });
    }
  }

  get selectView() {
    const { items, value } = this.props;
    return (
      <ReactAntSelect
        items={items}
        style={{ width: 120 }}
        value={[value[0]]}
        onChange={this._onSelectChange}
      />
    );
  }

  change(inValue) {
    const { value } = this.props;
    const { onClear, onChange } = this.props;
    this.setState({ value }, () => {
      onChange(returnEventTarget(value));
      !inValue && onClear();
    });
  }

  _onSelectChange = inEvent => {
    const { value, emptyWhenChange } = this.props;
    const _value = inEvent.target.value;
    value[0] = _value;
    emptyWhenChange && (this.state.value[1] = EMPTY_STR);
    this.change(_value);
  };

  _onInputChange = inEvent => {
    const { value } = this.props;
    const _value = inEvent.target.value;
    value[1] = _value;
    this.change(_value);
  };

  render() {
    const { className, onChange, onClear, Component, eventValue, items, value, emptyWhenChange, ...props } = this.props;
    const noOnClear = Component === Input || Component === Input.Search;
    const onClearProps = noOnClear ? null : { onClear: this._onInputChange };

    return (
      <Component
        addonBefore={this.selectView}
        value={value[1]}
        onChange={this._onInputChange}
        className={classNames('react-ant-pre-select-input', className)}
        {...onClearProps}
        {...props} />
    );
  }
}
