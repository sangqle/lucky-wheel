import { ListRenderer } from '@/components/list-renderer';
import Constant from '@/utils/Constant';
import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { openChat } from 'zmp-sdk';
import { Page, Box, Avatar, Text, Icon } from 'zmp-ui';

export const ProfilePage: React.FunctionComponent = () => {

  const Subscription: FC = () => {
    return (
      <Box className="m-4">
        <Box
          className="bg-green text-white rounded-xl p-4 space-y-2"
          style={{
            backgroundPosition: "right 8px center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Text.Title className="font-bold">Đăng ký thành viên</Text.Title>
          <Text size="xxSmall">Tích điểm đổi thưởng, mở rộng tiện ích</Text>
        </Box>
      </Box>
    );
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
                <Box flex>
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

  const Other: FC = () => {

    const handleOpenChat = () => {
      console.log('open chat');
      const openChatScreen = async () => {
        try {
          console.log(`open chat with ${Constant.REACT_APP_CHAT_USER_ID}`);
          const rs = await openChat({
            type: "user",
            id: Constant.REACT_APP_CHAT_USER_ID,
            message: "Xin Chào, ",
          });
          console.log(rs);
        } catch (error) {
          console.log(error);
        }
      };
      openChatScreen();
    };

    return (
      <Box className="m-4">
        <ListRenderer
          title="Khác"
          items={[
            {
              left: <Icon icon="zi-star" />,
              right: (
                <Box flex>
                  <Text.Header className="flex-1 items-center font-normal">
                    Đánh giá đơn hàng
                  </Text.Header>
                  <Icon icon="zi-chevron-right" />
                </Box>
              ),
            },
            {
              left: <Icon icon="zi-call" />,
              right: (
                <Box flex>
                  <Text.Header className="flex-1 items-center font-normal"
                    onClick={handleOpenChat}
                  >
                    Liên hệ và góp ý
                  </Text.Header>
                  <Icon icon="zi-chevron-right" />
                </Box>
              ),
            },
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

const Container = styled.div`
  padding: 20px;
          `;

// const RightContent = styled(Box)`;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   flex: 1;
  // Add more variables as needed
// `;
