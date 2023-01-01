import { Text } from "@components/Text";
import { useTheme } from "styled-components/native";
import { CardContainerSelector, CardIndicator } from "./styles";
import {TouchableOpacityProps} from 'react-native'

interface CardSelectorProps extends TouchableOpacityProps{
    isSelected: boolean;
    type: 'positive' | 'negative';
    title: string;
}
export function CardSelector({type,isSelected,title,...rest}:CardSelectorProps){
    const {colors} = useTheme()

    const borderColor = type === "positive" ? (
        isSelected ? colors.green[500] : 'transparent'
    ) : (
        isSelected ? colors.red[500] : 'transparent'
    )
    return (

    <CardContainerSelector 
        isInDiet={type === 'positive'} 
        style={{borderColor:borderColor}}
        {...rest}

    >
         <CardIndicator isInDiet={type === 'positive'}/>
            <Text 
                size="sm" 
                type="secundary" 
                weight="Bold"
            > 
                {title}
            </Text>

    </CardContainerSelector>

    )
}