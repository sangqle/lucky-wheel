import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Button, Page, Box, useNavigate, Input } from 'zmp-ui';
import { getUserInfo } from 'zmp-sdk/apis';

interface UserInfo {
  id: string;
  name: string;
  avatar: string;
}

const HomePage: React.FunctionComponent = () => {
  const [userInfo, setUserInfo] = React.useState<UserInfo | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { userInfo } = await getUserInfo();
        setUserInfo(userInfo);
        console.log('data', userInfo);
      } catch (error) {
        // Handle API call failure
        console.log(error);
      }
    };

    fetchData();

    // Clean up the subscription
    return () => {
      console.log('clean up');
    };
  }, []);

  const navigate = useNavigate();

  return (
    <Container>
      <Content>Home page Home page Home page Home page Home page Home page Home page</Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  /* Additional styles for your content */
`;

export default HomePage;
