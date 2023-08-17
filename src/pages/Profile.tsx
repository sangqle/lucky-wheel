import { ListRenderer } from '@/components/list-renderer';
import React, { FC } from 'react';
import styled from 'styled-components';
import { Page, Box, Avatar, Text, Icon } from 'zmp-ui';

export const ProfilePage: React.FunctionComponent = () => {
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

  return (
    <Page>
      <Personal />
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
