import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RecommendService from '@/components/recommend-service';
import RecommendationService from '@/state/redcommend-service';
import { RecommendationItem } from '@/types/recommend-service-item';
import { Box, Button, Text } from 'zmp-ui';


const Container = styled.div`
  height: 100%;
  overflow: auto;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  /* Additional styles for your content */
`;

const HomePage: React.FunctionComponent = () => {

  const [recommendServiceItems, setRecommendServiceItems] = useState<RecommendationItem[]>([]);

  const getRecommendationServiceItems = async () => {
    try {
      const response = await RecommendationService.getRecommendations();
      const allItems = response.data;
      console.log('Recommendation service items:', allItems);
      setRecommendServiceItems(allItems);
    } catch (error) {
      console.error('Error fetching recommendation service items:', error);
    }
  };

  useEffect(() => {
    getRecommendationServiceItems();
  }, []);

  return (
    <Container>
      <Box m={4}>
        <h2
          style={{
            textAlign: 'center',
            fontSize: '30px',
          }}
        >
          Dexeta cung cấp dịch vụ thi công decal trên mọi phương tiện
        </h2>
      </Box>
      <Box m={4}>
        <p
          style={{
            textAlign: 'center',
            fontSize: '20px',
          }}
        >
          Với 3 năm kinh nghiệm thi công, chúng tôi tự tin mang đến cho bạn những mẫu decal quảng cáo đẹp nhất với chi phí tiết kiệm nhất.
        </p>
      </Box>
      <Box>
        <h2
          style={{
            textAlign: 'center',
            fontSize: '30px',
          }}
        >Danh sách dịch vụ</h2>
      </Box>
      {
        recommendServiceItems.map((item, index) => {
          return (
            <RecommendService
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              time={item.time}
            />
          );
        })
      }
    </Container >
  );
};

export default HomePage;
