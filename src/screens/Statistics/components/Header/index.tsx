import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";

import { Text } from "@components/Text";
import { Heading } from "@components/Heading";


import { HeaderContainer, HeaderContent, HeaderStyledProps, Icon} from "./styles";

interface HeaderProps {
    isPossive: HeaderStyledProps,
    percentage: string,

}
export function Header({isPossive,percentage}: HeaderProps){ 
    const {colors} = useTheme()
    return (
        <HeaderContainer isPositive={isPossive}>
            <TouchableOpacity>
                <Icon
                    color={isPossive ? colors.green[500] : colors.red[500]}
                    size={30}
                
                />
            </TouchableOpacity>
            
            <HeaderContent>
                <Heading size="2xl">{percentage}%</Heading>
                <Text>
                    das refeições dentro da dieta
                </Text>

            </HeaderContent>
        </HeaderContainer>
    )
}