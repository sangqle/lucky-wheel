import React, { useState } from "react";
import styled from "styled-components";
import { BottomNavigation, Icon, useNavigate } from "zmp-ui";

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export function Footer() {
    const [activeTab, setActiveTab] = useState("timeline");
    const navigate = useNavigate();

    const handleTabChange = (tabKey, route) => {
        setActiveTab(tabKey);
        navigate(route);
    };

    return (
        <FooterContainer>
            <BottomNavigation fixed activeKey={activeTab}>
                <BottomNavigation.Item
                    key="timeline"
                    label="Lịch sử"
                    icon={<Icon icon="zi-clock-1" />}
                    activeIcon={<Icon icon="zi-clock-1-solid" />}
                    onClick={() => handleTabChange("timeline", "/history")}
                />
                <BottomNavigation.Item
                    label="Khám phá"
                    key="discovery"
                    icon={<Icon icon="zi-more-grid" />}
                    activeIcon={<Icon icon="zi-more-grid-solid" />}
                    onClick={() => handleTabChange("discovery", "/discover")}
                />
                <BottomNavigation.Item
                    key="me"
                    label="Cá nhân"
                    icon={<Icon icon="zi-user" />}
                    activeIcon={<Icon icon="zi-user-solid" />}
                    onClick={() => handleTabChange("me", "/about")}
                />
            </BottomNavigation>
        </FooterContainer>
    );
}
