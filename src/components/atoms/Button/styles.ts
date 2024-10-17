import styled, { css }  from 'styled-components';
import { Button } from '@mui/material';
import { ButtonProps } from './button';
import { gridWidth } from '../../../utils/stylesUtils.ts';

export const StyledButton = styled(Button).withConfig({
  shouldForwardProp: (prop) => !['isCustomize', 'backgroundColor', 'textColor', 'hoverBackgroundColor', 'hoverColor', 'width', 'height'].includes(prop)
})<ButtonProps>`
    font-family: ${ ({ fontFamily, theme }) => fontFamily || theme.others.typography.label } !important;
    text-transform: none !important;
    font-size: ${ ({ fontSize }) => fontSize || '1rem' } !important;
    ${ ({ theme, xs, sm, md, lg, xl, isCustomize, backgroundColor, textColor, hoverBackgroundColor, hoverColor, width, height}) => {
        if (isCustomize) {
            return `
                ${ () => width && `width: ${ width } !important;` };
                ${ () => height && `height: ${ height } !important;` };
                ${ () => backgroundColor && `background-color: ${ backgroundColor } !important;` };
                ${ () => textColor && `color: ${ textColor } !important;` };
                :hover {
                    ${ () => hoverBackgroundColor && `background-color: ${ hoverBackgroundColor } !important;` };
                    ${ () => hoverColor && `color: ${ hoverColor } !important;` };
                }
            `;
        }

        if (theme.breakpoints.down('xs') && xs) {
            return css `
                width: ${ gridWidth(xs) } !important;
            `;
        }

        if (theme.breakpoints.down('sm') && sm) {
            return css `
                width: ${ gridWidth(sm) } !important;
            `;
        }

        if (theme.breakpoints.down('md') && md) {
            return css `
                width: ${ gridWidth(md) } !important;
            `;
        }

        if (theme.breakpoints.down('lg') && lg) {
            return css `
                width: ${ gridWidth(lg) } !important;
            `;
        }

        if (theme.breakpoints.down('xl') && xl) {
            return css `
                width: ${ gridWidth(xl) } !important;
            `;
        }
        return '';
    } };
`;