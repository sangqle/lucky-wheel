import React from 'react';
import styled from 'styled-components';
import { Text } from 'zmp-ui';

const Container = styled.div`
    padding: 20px;
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    border-bottom: 1px solid #e5e5e5;
`;

const TextContainer = styled.div`
    padding: 0 10px;
`;

const TextTime = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const TextDescription = styled.div`
    margin-top: 5px;
`;

const RecommnedService = ({ title, description, image, time }) => {

    return (
        <Container>
            <img src={image} alt={title} style={{
                marginBottom: '10px', borderRadius: '5px'
            }} />
            <TextContainer>
                <Text.Title>{title}</Text.Title>
                <TextDescription
                    style={{
                        fontSize: '1rem',
                    }}
                >{description}</TextDescription>
                <TextTime
                    style={{
                        fontSize: '0.875rem',
                    }}
                >{time}</TextTime>
            </TextContainer>
        </Container>
    );
};

export default RecommnedService;