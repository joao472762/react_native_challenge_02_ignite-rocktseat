import styled from "styled-components/native";
import {ArrowUpRight} from 'phosphor-react-native'



export type SumaryStyledProps = boolean

interface  SumaryProps {
    isPositive: SumaryStyledProps
}

export const SumaryContainer = styled.View<SumaryProps>`
    padding: 13px 13px 20px 13px;
    text-align: center;
    border-radius: 8px;
    background-color: ${({isPositive,theme:{colors}}) => 
        isPositive 
        ? colors.gray[200]
        : colors.red[100]
    };

`

export const SumaryContent = styled.View`
    width: 100%;
    align-items: center;
    
`

export const Icon = styled(ArrowUpRight)`
    margin-left: auto;

`
