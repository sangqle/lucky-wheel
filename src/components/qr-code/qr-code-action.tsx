import React from 'react';
import styled from 'styled-components'; // Import styled-components
import { Box, Button } from 'zmp-ui';

const QRCodeAction = () => {
    return (
        <div className='h-1/6 bg-slate-100'>
            < Box >
                <Button variant="primary" size="large">
                    Tải về
                </Button>
            </Box >
            <Box>
                <Button>
                    Chia sẻ
                </Button>
            </Box>
        </div >
    );
};


export default QRCodeAction;