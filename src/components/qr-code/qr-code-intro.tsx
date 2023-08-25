import React from 'react';
import styled from 'styled-components'; // Import styled-components
import { Box, Text } from 'zmp-ui';


const QRCodeIntro = () => {
    return (
        <Box m={4}>
            <Text className='bg-teal-100 h-1/5 text-xl font-medium text-center text-teal-700'>
                Chia sẻ thông tin dễ dàng - Mã QR phong cách riêng!
            </Text>
        </Box>
    );
};


export default QRCodeIntro;