import { ReactNode } from "react";
import { ViewProps} from "react-native";
import { useTheme } from "styled-components/native";
import { TextInputMaskProps } from "react-native-masked-text";

import { DateInputRootContainer, DateInputInputContainer, Label, DateInputErrorMessage } from "./styles";

interface InputRoot extends ViewProps {
    children: ReactNode
}

function InputRoot({ children, ...rest }: InputRoot) {
    return (
        <DateInputRootContainer {...rest}>
            {children}
        </DateInputRootContainer>
    )
}

interface InputLabel  {
    title: string
}

function InputLabel({title}: InputLabel){
    return (
        <Label 
            size="sm" 
            weight="Bold" 
            type="secundary"
        >
            {title}
        </Label>
    )
}

function InputInput(props: TextInputMaskProps){
    const {colors} = useTheme()
    return (
        <DateInputInputContainer
            placeholderTextColor={colors.gray[700]}
            {...props}
        />
    )
}
interface InputErrorProps  {
    error: string
}
function InputError({error}: InputErrorProps){
    return (
        <DateInputErrorMessage>
            {error}
        </DateInputErrorMessage>
    )
}

export const DateInput = {
    Root: InputRoot,
    Label: InputLabel,
    Input: InputInput,
    Error: InputError,
}

