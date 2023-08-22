import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RecommendService from '@/components/recommend-service';
import RecommendationService from '@/state/redcommend-service';
import { RecommendationItem } from '@/types/recommend-service-item';
import { Button } from 'zmp-ui';


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
    </Container>
  );
};

export default HomePage;
