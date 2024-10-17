// pages/Login/index.tsx
// container item
import React from 'react';
import { Button } from '@components';
import { MainGrid, StyledGridHeader } from './styles';

export const Login: React.FC = () => {
    return (
        <MainGrid container >
            <StyledGridHeader >
            <Button
                backgroundColor="#fff"
                textColor="#fff"
                hoverBackgroundColor="#115293"
                hoverColor="#fff"
                width="100%"
                height="48px"
                fontFamily="Arial"
                fontSize="16px"
                isCustomize={true}
                >
                Login
            </Button>
            </StyledGridHeader>
        </MainGrid>
    );
};