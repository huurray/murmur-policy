import React from 'react';
// styles
import styled from 'styled-components';

interface Props {
  onClick?: any;
  style?: {};
}

function English({ onClick, style }: Props) {
  return (
    <Row onClick={onClick} style={style}>
      <Icon
        src={process.env.PUBLIC_URL + `/assets/imgs/flag-en.png`}
        alt='flag'
        style={{ width: 32, height: 19 }}
      />
      <Text>English</Text>
    </Row>
  );
}

function Korean({ onClick, style }: Props) {
  return (
    <Row onClick={onClick} style={style}>
      <Icon
        src={process.env.PUBLIC_URL + `/assets/imgs/flag-ko.png`}
        alt='flag'
      />
      <Text>한국어</Text>
    </Row>
  );
}

function Language({ setLng }) {
  return (
    <Row>
      <Korean onClick={() => setLng('ko')} style={{ marginRight: 20 }} />
      <English onClick={() => setLng('en')} />
    </Row>
  );
}

export default Language;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Icon = styled.img`
  width: 36px;
  height: 24px;
  margin-right: 5px;
`;
const Text = styled.div`
  font-size: 16px;
  color: #666;
  margin: 5px 0;
`;
