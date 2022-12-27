import { ReactNode } from "react";
import {TextInputProps, ViewProps} from "react-native"
import { useTheme } from "styled-components/native";


import { InputRootContainer, InputInputContainer, Label, InputErrorMessage } from "./styles";

interface InputRoot extends ViewProps {
    children: ReactNode
}

function InputRoot({ children, ...rest }: InputRoot) {
    return (
        <InputRootContainer {...rest}>
            {children}
        </InputRootContainer>
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

function InputInput(props: TextInputProps){
    const {colors} = useTheme()
    return (
        <InputInputContainer
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
        <InputErrorMessage>
            {error}
        </InputErrorMessage>
    )
}

export const Input = {
    Root: InputRoot,
    Label: InputLabel,
    Input: InputInput,
    Error: InputError,
}

