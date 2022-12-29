import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Text } from "@components/Text";
import { Card } from "./components/Card";
import { Header } from "./components/Header";

import { ScreenProps } from "@routes/stack.routes";

import { Footer, StatisticsContainer, StatisticsContent} from "./styles";
import { useMealsDetails } from "@hooks/useMealDetails";
import { useMeals } from "@hooks/useMeals";


export function Statistics({navigation,route}:NativeStackScreenProps<ScreenProps, 'Statistics'>){
    const {posiveMeals,negativeMeals,positiveMealSumary} = useMealsDetails()
    const {meals, positiveMealsSequence} = useMeals()

    function handleNavigatToHomeScreen(){
        navigation.navigate('Home')
    }

    return (
        <StatisticsContainer>
            <Header 
                isPossive 
                percentage={positiveMealSumary.porcentage}
                onNavigate={handleNavigatToHomeScreen} 
            />

            <StatisticsContent>
                <Text weight="Bold" style={{marginBottom: 12}}>Estatísticas gerais</Text>

                <Card
                    title={positiveMealsSequence}
                    subtitle="melhor sequência de pratos dentro da dieta"
                />

                <Card 
                   title={meals.length}
                    subtitle="refeições registradas"
                /> 

                <Footer>
                    <Card
                       
                        type="secundary"
                        title={posiveMeals.length}
                        subtitle={`refeições dentro da \n dieta`}
                    />

                    <Card
                        type="secundary"
                        isPositive={false}
                        title={negativeMeals.length}
                        subtitle={`refeições fora da \n  dieta`}
                    />

                </Footer>
            </StatisticsContent>


        </StatisticsContainer>
    )
}