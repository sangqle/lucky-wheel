import React, { useEffect } from 'react';
import { Button, Page, Avatar } from 'zmp-ui';
import { getUserInfo } from "zmp-sdk/apis";
import UserAvatar from "../components/UserAvatar";
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
  }, []);

  return (
    <Page className="page">
      <div className="page-content">
        <UserAvatar userInfo={userInfo} />
      </div>
    </Page>
  );
};

export default HomePage;