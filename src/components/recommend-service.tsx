import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    `;

const RecommnedService = ({ title, description, image, link }) => {

    return (
        <Container>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </Container>
    );
};

export default RecommnedService;