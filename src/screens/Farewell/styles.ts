import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Heading } from "@components/Heading";
import { Button as ButtonComponent } from "@components/Button";

export  const FarewellContainer = styled(SafeAreaView)`
    flex: 1;
    align-items: center;
    justify-content: center;

    padding: 24px;

    background-color: ${({theme:{colors}}) => colors.gray[100]};
`


interface TitleProps {
    isInDiet: boolean;

}
export const Title = styled(Heading)<TitleProps>`
    color: ${({theme:{colors},isInDiet}) => 
        isInDiet 
        ? colors.green[500]
        : colors.red[500]
     };

     margin-bottom: 8px;
`

export const Ilustration = styled.Image`
    margin-top: 24px;
`

export const  Button = styled(ButtonComponent)`
    width: 191px;
    margin-top: 24px;
`