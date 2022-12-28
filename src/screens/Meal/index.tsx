import { useTheme } from "styled-components/native";
import { PencilSimpleLine,Trash } from "phosphor-react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";


import { Text } from "@components/Text";
import { Button } from "@components/Button";
import { Heading } from "@components/Heading";
import { Header,HeaderType } from "@components/Header";

import { MealContainer,MealContent,DietStatus,DietIndicator,Footer} from "./styles";

import { ScreenProps } from "@routes/stack.routes";

export function Meal({navigation,route}:NativeStackScreenProps<ScreenProps,'Meal'>) {
    const  isInDiet = true;
    const {id} = route.params

    const headerType: HeaderType = isInDiet ? 'positive' : 'negative'
    const {colors} = useTheme()

    function navigateToHomeScreen(){
        navigation.navigate('Home')
    }


    return (
        <MealContainer isInDiet={isInDiet}>
            <Header 
                title="Refeição" 
                type={headerType} 
                onNavigate={navigateToHomeScreen}
            />
            <MealContent>
                <Heading  size="2lg">Sanduíche</Heading>
                <Text type="secundary" style={{textAlign: 'left',marginTop:4}}>Sanduíche de pão integral com atum e salada de alface e tomate</Text>

                <Text weight="Bold"  style={{marginTop: 24}}>Data e hora</Text>
                <Text type="secundary">12/08/2022 às 16:00</Text>


                <DietStatus>
                    <DietIndicator isInDiet={isInDiet}/>
                    <Text>
                        {isInDiet ? 'dentro da dieta' : 'fora da dieta'}
                    </Text>
                </DietStatus>

                <Footer>
                    <Button
                        Icon={<PencilSimpleLine color={colors.white} size={18} />}
                        title="Editar refeição"
                    />

                    <Button
                        type="secundary"
                        style={{marginTop:8}}
                        Icon={<Trash color={colors.gray[900]} size={18} />}
                        title="Editar refeição"
                    />
                </Footer>
            </MealContent>
        </MealContainer>
    )
}