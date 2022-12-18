import { ReactNode } from 'react'
import {TextProps as ReactTextProps} from 'react-native'

import { TextContent, textStyledProps } from './styles'

interface TextProps extends ReactTextProps{
    children: ReactNode,
    size?: textStyledProps['size'],
    weight?: textStyledProps['weight']
    type?: textStyledProps['type']
}

export function Text({children,size='md',weight='Regular',type='primary',...rest}: TextProps){
    return (
    <TextContent 
        size={size}
        type={type}
        weight={weight}
        {...rest}
    >
        {children}
    </TextContent>

    )
}