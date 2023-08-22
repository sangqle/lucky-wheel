import React from 'react';
import styled from 'styled-components';
import { Header as BaseHeader, Button, Text } from 'zmp-ui';

type HeaderProps = {
	title: string;
	transparent?: boolean;
	showBackButton?: boolean;
};

const StyledHeader = styled.div`
  background-color: #ff9500;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-around;
	width: 20%;
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
  display: grid;
  grid-template-columns: 10% 80% 10%;
`;

export function Header(props: HeaderProps) {
	const { title } = props;
	return (
		<StyledHeader className="zaui-header">
			<HeaderContainer>
				<HomeButton>
					<img
						src="/static/icons8-home-32.png"
						alt="back-button"
						style={{ width: '25px', height: '25px', marginLeft: '10px' }}
					/>
				</HomeButton>
				<LogoContainer>
					<img src="/static/dexeta.png" alt="logo" />
				</LogoContainer>
			</HeaderContainer>
		</StyledHeader>
	);
}
