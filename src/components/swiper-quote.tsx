import styled from 'styled-components';
import { Box, Swiper, Avatar } from 'zmp-ui';

const SwiperContainer = styled.div`
    margin: 0 20px;
    padding: 20px;
    background-color: #FAFBFE;
    font-size: 1rem;
`;
const SwiperCardContainer = styled.div`
    white-space: normal;
    display: flex;
    flex-direction: column;
    align-items: center;
    space-between: center;

`;
const SwiperCard = () => {
    return (
        <SwiperCardContainer>
            <Box textAlign='center'>
                DEXETA có chất lượng thi công và in ấn rất tốt, đã đồng hành cũng với SCFA từ những ngày đầu tiên và hoàn thành hàng chục chiến dịch với hàng ngàn xe quảng cáo, dịch vụ rất đáng tin cậy.
            </Box>
            <Box>
                <Avatar size={48} src='/static/recomend-services/nuoi-ca-betta.png'>
                </Avatar>
            </Box>
            <Box style={{ textAlign: 'center' }}>Tùng Mai Lê - Giám đốc Startup ShareCarforads</Box>
        </SwiperCardContainer >
    );
};

const SwiperQuote = () => {
    return (
        <SwiperContainer>
            <Box
                mt={6}
                flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <Swiper autoplay duration={2000} loop dots={false}>
                    <Swiper.Slide>
                        <SwiperCard />
                    </Swiper.Slide>
                    <Swiper.Slide>
                        <SwiperCard />
                    </Swiper.Slide>
                </Swiper>
            </Box>
        </SwiperContainer>
    );
};
export default SwiperQuote;