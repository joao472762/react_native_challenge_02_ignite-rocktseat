import { ReactNode } from "react";
import { TextProps } from "react-native";

import { HeadingContainer, HeadingStyledProps } from "./styles";

interface HeadingProps  extends TextProps {
    size?: HeadingStyledProps
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