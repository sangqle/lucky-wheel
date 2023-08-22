import { RecommendationItem } from "@/types/recommend-service-item";

const RecommendationService = {
    getRecommendations: async (): Promise<{ data: RecommendationItem[]; }> => {
        const mockData: RecommendationItem[] = [
            {
                id: 1,
                title: 'Dán decal xe tải full xe Tập đoàn Viettel',
                description: 'Ý tưởng dán decal xe tải full xe Dexeta thực hiện dự án dán decal xe tải full xe cho tập đoàn Viettel tại Hà Nội',
                image: '/static/recomend-services/nuoi-ca-betta.png',
                time: '2021-05-05',
                link: 'https://decalxetai.com'
            },
            {
                id: 2,
                title: 'Dán decal xe tải full xe Tập đoàn Viettel',
                description: 'Ý tưởng dán decal xe tải full xe Dexeta thực hiện dự án dán decal xe tải full xe cho tập đoàn Viettel tại Hà Nội',
                image: '/static/recomend-services/nuoi-ca-betta.png',
                time: '2021-05-05',
                link: 'https://decalxetai.com'

            },
            {
                id: 3,
                title: 'Dán decal xe tải full xe Tập đoàn Viettel',
                description: 'Ý tưởng dán decal xe tải full xe Dexeta thực hiện dự án dán decal xe tải full xe cho tập đoàn Viettel tại Hà Nội',
                image: '/static/recomend-services/nuoi-ca-betta.png',
                time: '2021-05-05',
                link: 'https://decalxetai.com'

            },
            {
                id: 4,
                title: 'Dán decal xe tải full xe Tập đoàn Viettel',
                description: 'Ý tưởng dán decal xe tải full xe Dexeta thực hiện dự án dán decal xe tải full xe cho tập đoàn Viettel tại Hà Nội',
                image: '/static/recomend-services/nuoi-ca-betta.png',
                time: '2021-05-05',
                link: 'https://decalxetai.com'

            },
            {
                id: 5,
                title: 'Dán decal xe tải full xe Tập đoàn Viettel',
                description: 'Ý tưởng dán decal xe tải full xe Dexeta thực hiện dự án dán decal xe tải full xe cho tập đoàn Viettel tại Hà Nội',
                image: '/static/recomend-services/nuoi-ca-betta.png',
                time: '2021-05-05',
                link: 'https://decalxetai.com'

            },
            {
                id: 6,
                title: 'Dán decal xe tải full xe Tập đoàn Viettel',
                description: 'Ý tưởng dán decal xe tải full xe Dexeta thực hiện dự án dán decal xe tải full xe cho tập đoàn Viettel tại Hà Nội',
                image: '/static/recomend-services/nuoi-ca-betta.png',
                time: '2021-05-05',
                link: 'https://decalxetai.com'

            }
        ];
        return {
            data: mockData
        };
    }
};

export default RecommendationService;