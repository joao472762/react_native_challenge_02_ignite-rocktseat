import { Text } from "@components/Text";
import { Heading } from "@components/Heading";

import { CardContainer, CardStyledProps } from "./styles";

interface CardProps  {
    type?: CardStyledProps['type'],
    isPositive?: CardStyledProps['isPositive'],
    title: string,
    subtitle: string,
}
export function Card({isPositive=true,type='primary',title,subtitle}: CardProps) {
    return (
        <CardContainer isPositive={isPositive} type={type}>
                <Heading>{title}</Heading>
                <Text size="xs">{subtitle}</Text> 
        </CardContainer>
    )
}