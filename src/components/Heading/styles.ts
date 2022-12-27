import styled, {css} from "styled-components/native";

export type HeadingStyledProps  = 'lg' |'2lg' | 'xl' | '2xl'

interface headingProps {
    size: HeadingStyledProps
} 


export const HeadingContainer = styled.Text<headingProps>`
    ${({size,theme}) => css`
        color: ${theme.colors.gray[900]};
        
        font-size: ${theme.fonts.size[size]}px;
        font-family: ${theme.fonts.family.NunitoSans.Bold};
    `}
`