import { IInputTextFieldProps } from './inputTextField';
import { StyledGrid, StyledTextField } from './styles';

export const InputTextField: React.FC<IInputTextFieldProps> = ({
    backgroundColor,
    textColor,
    width,
    height,
    fontFamily,
    fontSize,
    isCustomize,
    label,
    variant,
    ...rest
}) => {
    return (
        <StyledGrid container spacing={2}>
            <StyledTextField
                {...rest}
                label={label}
                variant={variant}
                backgroundColor={isCustomize ? backgroundColor : undefined}
                textColor={isCustomize ? textColor : undefined}
                width={isCustomize ? width : undefined}
                height={isCustomize ? height : undefined}
                fontFamily={isCustomize ? fontFamily : undefined}
                fontSize={isCustomize ? fontSize : undefined}
            />
        </StyledGrid>
    );
};