# react-ant-pre-select-input
> Preselect with input for antd.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ant-pre-select-input
```

## usage
1. import css
  ```scss
  @import "~@jswork/boilerplate-react-component/dist/style.css";

  // or use sass
  @import "~@jswork/boilerplate-react-component/dist/style.scss";

  // customize your styles:
  $boilerplate-react-component-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactAntPreSelectInput from '@jswork/boilerplate-react-component';
  import styled from 'styled-components';

  const Container = styled.div`
    width: 80%;
    margin: 30px auto 0;
  `;

  export default (props: any) => {
    return (
      <Container>
        <ReactAntPreSelectInput />
      </Container>
    );
  };

  ```

## preview
- https://afeiship.github.io/boilerplate-react-component/

## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-pre-select-input/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-pre-select-input
[version-url]: https://npmjs.org/package/@jswork/react-ant-pre-select-input

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-pre-select-input
[license-url]: https://github.com/afeiship/react-ant-pre-select-input/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-pre-select-input
[size-url]: https://github.com/afeiship/react-ant-pre-select-input/blob/master/dist/react-ant-pre-select-input.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-pre-select-input
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-pre-select-input
