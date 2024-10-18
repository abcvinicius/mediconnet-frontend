import { TextFieldProps } from '@mui/material/TextField';

export interface IInputTextFieldProps extends TextFieldProps {
    label: string;
    variant: 'outlined' | 'filled' | 'standard';
    width?: string;
    height?: string;
    backgroundColor?: string;
    textColor?: string;
    fontFamily?: string;
    fontSize?: string;
    isCustomize?: boolean;
    
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}