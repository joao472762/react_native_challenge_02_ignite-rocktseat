import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { Plus } from "phosphor-react-native";
import { Text } from "@components/Text";

export const HomeContainer  = styled(SafeAreaView)`
    flex: 1;

    padding: 0 24px;
    padding-top: 40px;
    background-color: ${({theme:{colors}}) => colors.gray[100]};
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 28px;
`

export const CreateNewMeal = styled.View`
    margin-top: 40px ;
    margin-bottom: 16px;
`

export const Label = styled(Text)`
    margin-bottom: 14px;
    text-align: left;
`

export const Icon = styled(Plus).attrs(({theme}) => ({
    color: theme.colors.white,
    size: 18,
}))``