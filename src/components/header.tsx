import React from 'react';
import styled from 'styled-components';
import { Header as BaseHeader, Button, Text } from 'zmp-ui';

type HeaderProps = {
	title: string;
	transparent?: boolean;
	showBackButton?: boolean;
};

const StyledHeader = styled.div`
    background: linear-gradient(90deg, #12aee2 0%, #66d68f 100%);
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-around;
	width: 100%;
`;

const HomeButton = styled.button`
	background: none;	
  border: none;
  cursor: pointer;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;

const HeaderTitle = styled(Text.Title)`
  margin: 0;
`;

const HeaderContainer = styled.div`
`;

export function Header(props: HeaderProps) {
	const { title } = props;
	return (
		<StyledHeader className="zaui-header">
			<HeaderContainer>
				<Text.Title className="text-white">{title}</Text.Title>
			</HeaderContainer>
		</StyledHeader>
	);
}
