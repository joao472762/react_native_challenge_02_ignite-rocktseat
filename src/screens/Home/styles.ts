import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const HomeContainer  = styled(SafeAreaView)`
    flex: 1;

    padding: 0 24px;
    padding-top: 40px;
    background-color: ${({theme:{colors}}) => colors.gray[100]};
`

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`