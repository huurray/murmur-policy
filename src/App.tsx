import React, { useState } from 'react';
// hocs
import withStyles from './styles/index';
// components
import Language from './components/Language';
import PolicyKo from './components/PolicyKo';
import PolicyEn from './components/PolicyEn';
import PrivacyKo from './components/PrivacyKo';
import PrivacyEn from './components/PrivacyEn';
// styles
import styled from 'styled-components';
import * as sizes from './styles/sizes';

function App() {
  const [type, setType] = useState('policy');
  const [lng, setLng] = useState('ko');

  function getCompanyName() {
    switch (lng) {
      case 'ko':
        return '"소곤소곤(Murmur)"';
      case 'en':
        return '"Murmur"';
      default:
        return '';
    }
  }
  const CS_EMAIL = 'huurray@gmail.com';

  return (
    <Container>
      <Content>
        <Box style={{ flex: 1 }}>
          <Language setLng={setLng} />
        </Box>
        <Box
          style={{
            borderBottom: '1px solid #e6e9ed',
            padding: '5rem 0',
          }}
        >
          <Row>
            <Title
              style={{
                color: type === 'policy' ? '#222' : '#ccc',
              }}
              onClick={() => setType('policy')}
            >
              {lng === 'en' ? 'Policy' : '이용약관'}
            </Title>
            <div style={{ width: 24 }} />
            <Title
              style={{
                color: type === 'policy' ? '#ccc' : '#222',
              }}
              onClick={() => setType('privacy')}
            >
              {lng === 'en' ? 'Privacy Policy' : '개인정보 처리방침'}
            </Title>
          </Row>
          <Text>{lng === 'en' ? 'Revision' : '개정'} 2020. 05. 01</Text>
        </Box>
        {type === 'policy' && (
          <>
            {lng === 'ko' && (
              <PolicyKo COMPANY={getCompanyName()} CS_EMAIL={CS_EMAIL} />
            )}
            {lng === 'en' && (
              <PolicyEn COMPANY={getCompanyName()} CS_EMAIL={CS_EMAIL} />
            )}
          </>
        )}
        {type === 'privacy' && (
          <>
            {lng === 'ko' && (
              <PrivacyKo COMPANY={getCompanyName()} CS_EMAIL={CS_EMAIL} />
            )}
            {lng === 'en' && (
              <PrivacyEn COMPANY={getCompanyName()} CS_EMAIL={CS_EMAIL} />
            )}
          </>
        )}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 1150px;

  @media (max-width: ${sizes.MOBILE}) {
    width: 100%;
    min-width: 100%;
  }
`;
const Row = styled.div`
  display: flex;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;
const Box = styled.div`
  display: flex;
  padding: 25px 0;
  width: 90%;
  max-width: 720px;
  flex-direction: column;
  align-items: flex-start;
  cursor: pointer;
`;
const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin: 14px 0;

  @media (max-width: ${sizes.MOBILE}) {
    font-size: 24px;
  }
`;
const Text = styled.div`
  font-size: 18px;
  line-height: 1.8;
  color: #666;
  margin: 5px 0;
`;

export default withStyles(App);
