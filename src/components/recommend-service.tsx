import React from 'react';
import styled from 'styled-components';
import { Text } from 'zmp-ui';

const Container = styled.div`
    padding: 20px;
    border-bottom: 1px solid #e5e5e5;
`;

const TextContainer = styled.div`
    padding: 0 10px;
`;

const TextTime = styled(Text)`
    display: flex;
    justify-content: flex-end;
`;

const TextDescription = styled(Text)`
    margin-top: 5px;
`;

const RecommnedService = ({ title, description, image, time }) => {

    return (
        <Container>
            <img src={image} alt={title} style={{ marginBottom: '10px' }} />
            <TextContainer>
                <Text.Title>{title}</Text.Title>
                <TextDescription>{description}</TextDescription>
                <TextTime>{time}</TextTime>
            </TextContainer>
        </Container>
    );
};

export default RecommnedService;