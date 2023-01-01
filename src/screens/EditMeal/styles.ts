
import { Heading } from "@components/Heading";
import { ArrowLeft } from "phosphor-react-native";
import { TextInputMask} from "react-native-masked-text";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const NewMealContainer = styled.View`
    flex: 1;
    background-color: ${({theme:{colors}}) => colors.gray[300]};
`

export const EditMealContainer = styled.View`
    flex: 1;
    background-color: ${({theme:{colors}}) => colors.gray[300]};
`

export const EditMealForm = styled.View`
    flex: 1;
    align-items: center;

    padding: 0 24px;
    padding-bottom: 24px;

    
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    
    background-color: ${({theme:{colors}}) => colors.gray[100]};

`

export const Header = styled(SafeAreaView)`
    flex-direction: row;
    padding: 16px 24px;
    padding-bottom: 24px;

    background-color: ${({theme:{colors}}) => colors.gray[300]};
`

export const Title =  styled(Heading)`
    flex: 1;
    text-align: center;
    padding-right: 24px;
`



export const DateFitelds =  styled.View`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
   

`

export const DateInput = styled(TextInputMask)`
    ${({theme:{colors,fonts}}) => css`
     
     height: 48px;
     width: 48%;

     border-width: 1px;
     border-style: solid;
     border-radius: 6px;

     padding: 14px;

     
     border-color: ${colors.gray[300]};
     color: ${colors.gray[900]};
     font-size: ${fonts.size.md}px;
     font-family: ${fonts.family.NunitoSans.Regular};
 
 `}
`

export const Footer = styled.View`
    width: 100%;
    align-items: flex-start;
    margin-top: 24px;
`

export const DietSelector = styled.View`
    display:  flex;
    flex-direction: row;;
    justify-content: space-between;

    width: 100%;

    margin-top: 8px;
`


export interface DietSelectorProps  {
    isInDiet: boolean;
}




export const Icon = styled(ArrowLeft).attrs(({theme:{colors}}) => ({
    size: 24,
    color: colors.gray[800]
}))`
 

`