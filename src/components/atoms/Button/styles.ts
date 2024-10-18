import styled from 'styled-components';
import { Button } from '@mui/material';
import { IButtonProps } from './button';

export const StyledButton = styled(Button)<IButtonProps>`

    ${({ backgroundColor, textColor, hoverBackgroundColor, hoverColor, width, height }) => `
        ${width ? `width: ${width} !important;` : ''}
        ${height ? `height: ${height} !important;` : ''}
        ${backgroundColor ? `background-color: ${backgroundColor} !important;` : ''}
        ${textColor ? `color: ${textColor} !important;` : ''}
        
        &:hover {
            ${hoverBackgroundColor ? `background-color: ${hoverBackgroundColor} !important;` : ''}
            ${hoverColor ? `color: ${hoverColor} !important;` : ''}
        }

`}
    font-family: inherit !important;
    text-transform: none !important;
    font-size: ${({ fontSize }) => fontSize || '1rem'} !important;
`;