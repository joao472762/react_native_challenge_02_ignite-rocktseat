import { Heading } from "@components/Heading";
import { View,Text,Image} from "react-native";
import LogoImage from '@assets/Logo.png'
import { Header, HomeContainer } from "./styles";
import { Avatar } from "@components/Avatar";

export function Home(){
    return (
        <HomeContainer>
            <Header>
                <Image source={LogoImage}/>
                <Avatar source={{uri:'https://github.com/joao472762.png'}}/>
            </Header>
            
        </HomeContainer>
    )
}