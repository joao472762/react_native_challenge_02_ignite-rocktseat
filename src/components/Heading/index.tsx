import { ReactNode } from "react";
import { TextProps } from "react-native";

import { HeadingContainer } from "./styles";

interface HeadingProps  extends TextProps {
    size?: 'lg' | 'xl' | '2xl',
    children: ReactNode
}

export function Heading({size= 'xl', children,...rest}:HeadingProps) {
    return (
        <HeadingContainer
            size={size}
            {...rest}
        >
            {children}
        </HeadingContainer>
    )
}