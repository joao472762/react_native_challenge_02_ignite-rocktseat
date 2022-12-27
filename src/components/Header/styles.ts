import styled from "styled-components/native"
import { ArrowLeft } from "phosphor-react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { Heading } from "@components/Heading"


export const HeaderContainer = styled(SafeAreaView)`
    flex-direction: row;
    padding: 16px 24px;
    padding-bottom: 24px;

    
`

export const Title =  styled(Heading)`
    flex: 1;
    text-align: center;
    padding-right: 24px;
`

export const Icon = styled(ArrowLeft).attrs(({theme:{colors}}) => ({
    size: 24,
    color: colors.gray[800]
}))`
 

`