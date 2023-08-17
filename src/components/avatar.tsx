import React from 'react';
import { Avatar as BaseAvatar, Box, Text } from 'zmp-ui';

export function Avatar({ userInfo }) {
  return (
    <div className="flex items-center">
      <BaseAvatar src={userInfo?.avatar} size={48} />
      <div>
        <Text>{userInfo?.name}</Text>
        <Text>{userInfo?.id}</Text>
      </div>
    </div>
  );
}
