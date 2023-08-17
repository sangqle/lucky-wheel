import { ListRenderer } from '@/components/list-renderer';
import React, { FC } from 'react';
import styled from 'styled-components';
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
          title="Cá nhân"
          items={[
            {
              left: <Icon icon="zi-user" />,
              right: (
                <Box flex>
                  <Text.Header className="flex-1 items-center font-normal">
                    Thông tin tài khoản
                  </Text.Header>
                  <Icon icon="zi-chevron-right" />
                </Box>
              ),
            },
            {
              left: <Icon icon="zi-clock-2" />,
              right: (
                <Box flex>
                  <Text.Header className="flex-1 items-center font-normal">
                    Lịch sử đơn hàng
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

  const Other: FC = () => {
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
                  <Text.Header className="flex-1 items-center font-normal">
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
      <Subscription />
      <Personal />
      <Other />
    </Page>
  );
};

const Container = styled.div`
  padding: 20px;
`;

// const RightContent = styled(Box)`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   flex: 1;
// `;
