import { Heading } from "@components/Heading";
import { Text } from "@components/Text";
import {ArrowUpRight} from 'phosphor-react-native'
import { useTheme } from "styled-components/native";

import { SumaryContainer, SumaryContent, SumaryStyledProps, Icon} from "./styles";

interface SumaryProps {
    isPossive: SumaryStyledProps
}
export function Sumary({isPossive}: SumaryProps){ 
    const {colors} = useTheme()
    return (
        <SumaryContainer isPositive={isPossive}>

            <Icon
                color={isPossive ? colors.green[500] : colors.red[500]}
                size={30}
            
            />
            
            <SumaryContent>
                <Heading size="2xl">90.86%</Heading>
                <Text>
                    das refeições dentro da dieta
                </Text>

            </SumaryContent>

            
        </SumaryContainer>
    )
}