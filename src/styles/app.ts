import styled from "styled-components/native";

export const AppContainer = styled.View`
    flex: 1;
    background-color: ${({theme:{colors}}) => colors.gray[100]};
`
