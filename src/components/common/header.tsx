import React from 'react';
import { Header as BaseHeader } from 'zmp-ui';

type HeaderProps = {
    title: string;
    transparent?: boolean;
    showBackButton?: boolean;
};

export function Header(props: HeaderProps) {
    return (<BaseHeader />);
}