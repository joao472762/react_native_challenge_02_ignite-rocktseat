import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Text } from "@components/Text";
import { Card } from "./components/Card";
import { Header } from "./components/Header";

import { ScreenProps } from "@routes/stack.routes";

import { Footer, StatisticsContainer, StatisticsContent} from "./styles";


export function Statistics({navigation,route}:NativeStackScreenProps<ScreenProps, 'Statistics'>){
    function handleNavigatToHomeScreen(){
        navigation.navigate('Home')
    }

    return (
        <StatisticsContainer>
            <Header 
                isPossive 
                percentage='98'
                onNavigate={handleNavigatToHomeScreen} 
            />

            <StatisticsContent>
                <Text weight="Bold" style={{marginBottom: 12}}>Estatísticas gerais</Text>

                <Card
                    title="22"
                    subtitle="melhor sequência de pratos dentro da dieta"
                />

                <Card 
                   title="22"
                    subtitle="refeições registradas"
                /> 

                <Footer>
                    <Card
                       
                        type="secundary"
                        title="22"
                        subtitle={`refeições dentro da \n dieta`}
                    />

                    <Card
                        type="secundary"
                        isPositive={false}
                        title="22"
                        subtitle={`refeições fora da \n  dieta`}
                    />

                </Footer>
            </StatisticsContent>


        </StatisticsContainer>
    )
}