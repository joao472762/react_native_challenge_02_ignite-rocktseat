import styled, { css } from "styled-components/native";
export type  TypeStyled = 'primary' | 'secundary'

interface ButtonType  {
    type: TypeStyled
}

export const ButtonContent = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    padding: 16px 24px;
    border-radius: 6px;
    background-color: ${({theme:{colors}}) => colors.gray[800]};
`

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.fonts.size.sm}px;
        font-family: ${ theme.fonts.family.NunitoSans.Bold};
        color: ${theme.colors.white};
        margin-left: 12px;
    `}
`