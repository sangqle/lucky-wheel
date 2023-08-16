import React, { useEffect } from 'react';
import { Button, Page, Avatar, Box, useNavigate } from 'zmp-ui';
import { getUserInfo } from "zmp-sdk/apis";
import UserAvatar from "../components/userAvatar";
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
    <Page className="page">
      <Header title="Zalo Mini App" />

      <div className="page-content">
        <UserAvatar userInfo={userInfo} />
      </div>
      <Footer />
    </Page>
  );
};

export default HomePage;