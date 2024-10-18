// pages/Login/index.tsx
// container item
import React from 'react';
import { Button, InputTextField } from '@components';
import { LoginMainGrid, StyledGridHeader } from './styles';


export const Login: React.FC = () => {
    return (
        <LoginMainGrid container >
            <StyledGridHeader container item>
            
            <Button
                backgroundColor="#117fec"
                textColor="#ffffff"
                hoverBackgroundColor="#115293"
                hoverColor="#fff"
                width="10rem"
                height="3rem"
                fontFamily="Arial"
                fontSize="16px"
                isCustomize={true}
                >
                Login
            </Button>
            
            
            <InputTextField
                label="Your Name"
                variant="filled"
                backgroundColor=""
                textColor="#333"
                width="300px"
                fontFamily="Arial"
                fontSize="16px"
                isCustomize={true}
            />
            

        </StyledGridHeader>
        </LoginMainGrid>
    );
};
