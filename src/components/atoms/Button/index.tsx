// Button/index.tsx
import { ButtonProps } from './button';
import { StyledButton } from './styles';

export const Button: React.FC<ButtonProps> = ({
    backgroundColor,
    textColor,
    hoverBackgroundColor,
    hoverColor,
    width,
    height,
    children,
    onClick,
    ...rest
}) => {
    return (
        <StyledButton
            {...rest}
            onClick={onClick}
            backgroundColor={backgroundColor}
            textColor={textColor}
            hoverBackgroundColor={hoverBackgroundColor}
            hoverColor={hoverColor}
            width={width}
            height={height}
        >
            {children}
        </StyledButton>
    );
};