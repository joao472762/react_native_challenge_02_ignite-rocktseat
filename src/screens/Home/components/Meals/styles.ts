import { Text } from "@components/Text";
import styled from "styled-components/native";

export const MealsContainer = styled.View`
    margin-bottom: 24px;
`

export const CardContainer = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    
    border-width: 1px;
    border-radius: 6px;
    border-style: solid;
    border-color: ${({theme:{colors}}) => colors.gray[300]};

    padding: 14px 16px;
    padding-left: 12px;

    margin-top: 8px;

    background-color: ${({theme:{colors}}) => colors.gray[100]};
`



export const Title = styled(Text)`
    flex: 1;
    margin-left: 12px;

    padding-left: 12px; 
    border-left-width: 1px;
    border-style: solid;
    border-left-color: ${({theme:{colors}}) => colors.gray[300]};
    
`
export type CardStyledProps =  boolean

interface  CardProps {
    isInDiet: CardStyledProps
}
export const DietIdicator = styled.View<CardProps>`
    width: 14px;
    height: 14px;

    border-radius: 7px;

    background-color: ${({isInDiet,theme:{colors}}) =>
        isInDiet 
        ? colors.green[100] 
        : colors.red[100]   
    };
`

