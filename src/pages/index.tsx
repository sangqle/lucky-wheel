import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import QRCodeIntro from '@/components/qr-code/qr-code-intro';
import QRCodeBody from '@/components/qr-code/qr-code-body';
import QRCodeInput from '@/components/qr-code/qr-code-input';
import QRCodeAction from '@/components/qr-code/qr-code-action';


const Container = styled.div`
  height: 100%;
  overflow: auto;
`;

const HomePage: React.FunctionComponent = () => {

  return (
    <Container>
      <QRCodeIntro />
      <QRCodeBody />
      <QRCodeAction />
      <QRCodeInput />
    </Container >
  );
};

export default HomePage;
