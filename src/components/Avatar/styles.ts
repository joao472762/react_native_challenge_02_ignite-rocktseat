import styled from "styled-components/native";

export const AvatartContent = styled.Image`
    width: 40px;
    height: 40px;

    border-width:  2px;
    border-style: solid;
    border-radius: 20px;
    border-color: ${({theme:{colors}}) => colors.gray[800]};
`