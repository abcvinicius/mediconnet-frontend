import styled from 'styled-components';
import { IInputTextFieldProps } from './inputTextField';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export const StyledGrid = styled(Grid)<{ xs?: number; sm?: number; md?: number; lg?: number; xl?: number }>`
`;

export const StyledTextField = styled(TextField)<IInputTextFieldProps>`
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  color: ${(props) => props.textColor || 'inherit'};
  font-family: ${(props) => props.fontFamily || 'inherit'};
  font-size: ${(props) => props.fontSize || 'inherit'};

  .MuiInputBase-input {
    color: ${(props) => props.textColor || 'inherit'};
  }

  .MuiInputLabel-root {
    color: ${(props) => props.textColor || 'inherit'};
  }
`;