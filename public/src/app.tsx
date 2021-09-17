import React from 'react';
import ReactAntPreSelectInput from '../../src/main';
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  margin: 30px auto 0;
`;

const items = [
  { value: 'course', label: '按课程' },
  { value: 'serise', label: '按课程系列' },
  { value: 'other', label: '其它' }
];

export default (props: any) => {
  return (
    <Container>
      <ReactAntPreSelectInput
        items={items}
        searchable
        onChange={(e) => {
          console.log('change: ', e.target.value);
        }}
        onSearch={(e) => {
          console.log('search: ', e.target.value);
        }}
      />
    </Container>
  );
};
