!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("antd"),require("classnames"),require("next-return-event"),require("noop"),require("prop-types"),require("react"),require("react-ant-select")):"function"==typeof define&&define.amd?define(["antd","classnames","next-return-event","noop","prop-types","react","react-ant-select"],t):"object"==typeof exports?exports.ReactAntPreSelectInput=t(require("antd"),require("classnames"),require("next-return-event"),require("noop"),require("prop-types"),require("react"),require("react-ant-select")):e.ReactAntPreSelectInput=t(e.antd,e.classnames,e["next-return-event"],e.noop,e["prop-types"],e.react,e["react-ant-select"])}(this,function(e,t,n,r,o,a,u){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o);t.default=a.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,l,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(7),d=r(f),v=n(6),h=r(v),y=n(3),m=r(y),b=n(5),C=r(b),x=n(2),g=n(8),_=r(g),O=n(4),j=(l=s=function(e){function t(e){a(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._onChange=function(e,t){var r=n.props.value,o=n.props,a=o.onClear,u=o.onChange;r[e]=t.target.value,n.setState({value:r},function(){u((0,O.returnEventTarget)(r)),!r[e]&&a()})},n.state={value:e.value},n}return i(t,e),p(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.value;t!==this.state.value&&this.setState({value:t})}},{key:"render",value:function(){var e=this.props,t=e.className,n=(e.onChange,e.onClear,e.Component),r=(e.items,e.value),a=o(e,["className","onChange","onClear","Component","items","value"]),u=n===x.Input||n===x.Input.Search,i=u?null:{onClear:this._onChange.bind(this,1)};return d.default.createElement(n,c({addonBefore:this.selectView,value:r[1],onChange:this._onChange.bind(this,1),className:(0,m.default)("react-ant-pre-select-input",t)},i,a))}},{key:"selectView",get:function(){var e=this.props,t=e.items,n=e.value;return d.default.createElement(_.default,{items:t,style:{width:120},value:[n[0]],onChange:this._onChange.bind(this,0)})}}]),t}(f.Component),s.propTypes={className:h.default.string,items:h.default.array,value:h.default.array,onChange:h.default.func,onClear:h.default.func,Component:h.default.func},s.defaultProps={items:[],value:[],onChange:C.default,onClear:C.default,Component:x.Input},l);t.default=j},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=a},function(e,t){e.exports=u}])});
//# sourceMappingURL=react-ant-pre-select-input.js.map