import styled, { css } from "styled-components/native";

import { Text } from "@components/Text";

export const InputRootContainer = styled.View`
    width: 100%;

    align-items: flex-start;
`

export const InputInputContainer = styled.TextInput`
    ${({theme:{colors,fonts}}) => css`
     
        height: 48px;
        width: 100%;

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

export const InputErrorMessage = styled.Text`
    ${({theme}) => css`
        margin-top: 4px;
        text-align: center;
        font-size:  ${theme.fonts.size.sm}px;
        font-family:${theme.fonts.family.NunitoSans.Bold};
        color: ${theme.colors.red[500]}
    `}
`

export const Label = styled(Text)`
    margin-bottom: 4px; 

`