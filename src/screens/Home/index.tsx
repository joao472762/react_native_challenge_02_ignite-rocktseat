import { Image} from "react-native";

import { Text } from "@components/Text";
import { Card } from "./components/Card";
import LogoImage from '@assets/Logo.png';
import { Avatar } from "@components/Avatar";
import { Sumary } from "./components/Sumary";
import { Heading } from "@components/Heading";
import { Button } from "../../components/Button";


import { CreateNewMeal, Header, HomeContainer, Icon } from "./styles";

interface meal {
    date: Date;
    name: string;
    description: string;
    hasInDiet: boolean;
}



export function Home(){

    return (
        <HomeContainer>
            <Header>
                <Image source={LogoImage}/>
                <Avatar source={{uri:'https://github.com/joao472762.png'}}/>
            </Header>

            <Sumary isPossive percentage="80"/>

            <CreateNewMeal>
                <Text style={{marginBottom: 8}}>Refeições</Text>

                <Button
                    Icon={<Icon/>}
                    title="Nova refeição"
                />

            </CreateNewMeal>

            <Heading size="lg">
                12.08.22
            </Heading>

            <Card
                hours="20:00"
                isInDiet
                name="X-tudo"
            />

            
        </HomeContainer>
    )
}