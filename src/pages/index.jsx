import React, { useEffect, useState } from 'react';
import {
  List,
  Page,
  Icon,
  useNavigate
} from 'zmp-ui';
import { useRecoilValue } from 'recoil';
import { getUserInfo } from 'zmp-sdk/apis';
import { userState } from '../state';

import UserCard from '../components/user-card';

const HomePage = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Move the API call inside the useEffect hook
    getUserInfo({
      success: (data) => {
        const { userInfo } = data;
        setUserInfo(userInfo);
      },
      fail: (error) => {
        console.log(error);
      }
    });
  }, []); // Empty dependency array ensures the effect runs once on component mount

  return (
    <Page className="page">
      <div className="section-container">
        {/* Only render UserCard if userInfo is available */}
        {userInfo && <UserCard user={userInfo} />}
      </div>
    </Page>
  );
}

export default HomePage;