import { ListRenderer } from '@/components/list-renderer';
import Constant from '@/utils/Constant';
import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { openChat } from 'zmp-sdk';
import { Page, Box, Avatar, Text, Icon } from 'zmp-ui';

export const ProfilePage: React.FunctionComponent = () => {

  const openChatScreen = async () => {
    try {
      await openChat({
        type: "user",
        id: Constant.REACT_APP_CHAT_USER_ID,
        message: "Xin Chào, ",
      });
    } catch (error) {
      // xử lý khi gọi api thất bại
      console.log(error);
    }
  };

  const handleOpenChat = () => {
    openChatScreen();
    console.log('open chat');
  };
  const Personal: FC = () => {
    return (
      <Box className="m-4">
        <ListRenderer
          title="Thông tin liên hệ"
          items={[
            {
              left: <Icon icon="zi-chat" />,
              right: (
                <Box flex onClick={() => handleOpenChat()}>
                  <Text.Header className="flex-1 items-center font-normal">
                    Chat với bộ phận tư vấn
                  </Text.Header>
                  <Icon icon="zi-chevron-right" />
                </Box>
              ),
            }
          ]}
          renderLeft={(item) => item.left}
          renderRight={(item) => item.right}
        />
      </Box>
    );
  };


  return (
    <Page>
      <Personal />
    </Page>
  );
};
