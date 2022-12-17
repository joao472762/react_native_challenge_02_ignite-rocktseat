import styled from "styled-components/native";

export const LoaderContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;

    background-color: ${({theme:{colors}}) => colors.gray[100]};

`

export const Indicator = styled.ActivityIndicator.attrs(({theme:{colors}}) => ({
    size: 'large',
    color: colors.green[300]
}))``

