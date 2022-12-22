import styled, { css } from "styled-components/native";

export interface CardStyledProps {
    isPositive: boolean;
    type: 'primary' | 'secundary'
}

export const CardContainer = styled.View<CardStyledProps>`
    ${({isPositive, type, theme:{colors}}) => css`
        align-items:  center;
        justify-content: center;

        width:  ${ type === 'primary' ?  100 : 48}%;
        margin-top: 12px;
        border-radius:  8px;

        height: ${ type === 'primary' ?  89 : 107}px;

        background-color:  ${isPositive ? colors.gray[200] : colors.red[100]};
    `}
`
