import { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native"

import {Title, ButtonContent} from './styles'

interface ButtonRootProps extends TouchableOpacityProps{
    title: string,
    Icon?: ReactNode

}

export function Button({title,Icon, ...rest }: ButtonRootProps){
   
    return (
        <ButtonContent  {...rest}>
                {Icon}      
            <Title>
                {title}
            </Title>
        </ButtonContent>
    )
}


 

