import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";
import { HeaderContainer, Icon, Title } from "./styles";

export type HeaderType = 'default' | 'positive' | 'negative';

interface HeaderProps {
    title: string;
    type?: HeaderType
}

export function Header({title, type='default'}: HeaderProps){
    const {colors} = useTheme()

    const headerType = {
        positive: colors.green[100],
        negative: colors.red[100],
        default: colors.gray[300]
    }

    const color = headerType[type]
    

    return (
        <HeaderContainer style={{backgroundColor:color}}>
            <TouchableOpacity>
                    <Icon/>
                </TouchableOpacity>
                <Title size="lg">{title}</Title>
        </HeaderContainer>
    )
}