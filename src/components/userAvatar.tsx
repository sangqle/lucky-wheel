import React from "react";
import { Avatar, Box, Text } from "zmp-ui";

const userAvatar = ({ userInfo }) => {
  return (
    <div className="flex items-center">
      <Avatar src={userInfo?.avatar} size={48} />
      <div>
        <Text >{userInfo?.name}</Text>
        <Text>{userInfo?.id}</Text>
      </div>
    </div>
  );
};

export default userAvatar;
