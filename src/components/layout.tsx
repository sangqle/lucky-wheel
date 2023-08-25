import React from 'react';
import { Navigation } from '@/components/navigation';
import styled from 'styled-components'; // Import styled-components
import { Route, Routes } from 'react-router-dom';
import HomePage from '@/pages';
import { ProfilePage } from '@/pages/Profile';
import { Header } from './header';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* Use the full viewport height */
`;

const Flex1Container = styled.div`
  flex: 1;
  overflow: hidden;
`;

export const Layout = () => {
  return (
    <FlexContainer>
      <Header title={'Tạo QR'} />
      <Flex1Container>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Routes>
      </Flex1Container>
      <Navigation />
    </FlexContainer>
  );
};
