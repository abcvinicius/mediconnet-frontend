import { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export interface ButtonProps extends MuiButtonProps {
    backgroundColor?: string;
    textColor?: string;
    hoverBackgroundColor?: string;
    hoverColor?: string;
    width?: string;
    height?: string;
    fontFamily?: string;
    fontSize?: string;
    isCustomize?: boolean;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}