import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Button, Page, Box, useNavigate, Input } from 'zmp-ui';
import { getUserInfo } from "zmp-sdk/apis";
import { Avatar } from "@/components/common/avatar";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";

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
    <Container >
      <Box>
        <p>Content here</p>
      </Box>
    </Container>
  );
};

const Container = styled.div`
`;

export default HomePage;