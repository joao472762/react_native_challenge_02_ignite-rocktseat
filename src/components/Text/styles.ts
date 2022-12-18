import styled, { css } from "styled-components/native"

export type textStyledProps = {
    size: 'xs'| 'sm' | 'md',
    weight: 'Regular' | 'Bold'
    type: 'primary' | 'secundary'
}

export const TextContent =  styled.Text<textStyledProps>`
    ${({size,theme,weight,type}) => css`
        font-size:  ${theme.fonts.size[size]}px;
        color: ${type === 'primary' ? theme.colors.gray[800] : theme.colors.gray[900]};
        font-family: ${ 
            weight ==='Regular' 
            ? theme.fonts.family.NunitoSans.Regular 
            : theme.fonts.family.NunitoSans.Bold
        };
    `}
`