import { Button as ButtonComponent } from "@components/Button";
import styled from "styled-components/native";

export const  Button = styled(ButtonComponent)`
    width: 48%;
`

export const ModalContainer = styled.Modal``

export const Overlay = styled.View`
    flex: 1;
    padding:  24px;
    align-items: center;
    justify-content: center;

    background-color: ${({theme: {colors}} ) => colors.overlay};
`

export const ModalContent = styled.View`
    width: 100%;
    border-radius:  8px;
    padding: 32px 24px;
    background-color:  ${({theme:{colors}}) => colors.gray[100]};

`

export const Footer = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 32px
`
