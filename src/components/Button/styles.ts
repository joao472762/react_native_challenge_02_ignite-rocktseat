import styled, { css } from "styled-components/native";


export type  ButtonStyledProps = 'primary' | 'secundary'

interface ButtonProps  {
    type: ButtonStyledProps
}

export const ButtonContent = styled.TouchableOpacity<ButtonProps>`
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 16px 0px;
    border-radius: 6px;

    border-width: 1px;
    border-style: solid;
    border-color: ${({theme:{colors},type}) => 
        type === 'primary'
        ? 'transparent'
        : colors.gray[900]

    };

    background-color: ${({theme:{colors},type}) => 
        type === 'primary' 
        ? colors.gray[800]
        : colors.white
    };
`

export const Title = styled.Text<ButtonProps>`
    ${({theme,type}) => css`
        font-size: ${theme.fonts.size.sm}px;
        font-family: ${ theme.fonts.family.NunitoSans.Bold};

        color: ${type === 'primary' 
            ? theme.colors.white
            : theme.colors.gray[900]
        };

        margin-left: 12px;
    `}
`