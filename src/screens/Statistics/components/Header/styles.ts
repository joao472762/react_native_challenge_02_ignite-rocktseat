import styled from "styled-components/native";
import {ArrowLeft} from 'phosphor-react-native'
import { SafeAreaView } from "react-native-safe-area-context";



export type HeaderStyledProps = boolean

interface  HeaderProps {
    isPositive: HeaderStyledProps
}

export const HeaderContainer = styled(SafeAreaView)<HeaderProps>`
    padding: 8px 24px 28px 24px;
    text-align: center;
    border-radius: 8px;
    background-color: ${({isPositive,theme:{colors}}) => 
        isPositive 
        ? colors.gray[200]
        : colors.red[100]
    };

`

export const HeaderContent = styled.View`
    width: 100%;
    align-items: center;
    
`

export const Icon = styled(ArrowLeft)`
 

`
