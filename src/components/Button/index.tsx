import { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native"

import {Title, ButtonContent, ButtonStyledProps} from './styles'

interface ButtonRootProps extends TouchableOpacityProps{
    title: string,
    Icon?: ReactNode,
    type?: ButtonStyledProps

}

export function Button({title,Icon, type='primary', ...rest }: ButtonRootProps){
   
    return (
        <ButtonContent type={type}  {...rest}>
                {Icon}      
            <Title type={type}>
                {title}
            </Title>
        </ButtonContent>
    )
}


 

