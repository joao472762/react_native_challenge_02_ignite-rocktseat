import { Image} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import LogoImage from '@assets/Logo.png';

import { Card } from "./components/Card";
import { Avatar } from "@components/Avatar";
import { Sumary } from "./components/Sumary";
import { Heading } from "@components/Heading";
import { Button } from "../../components/Button";


import { ScreenProps } from "@routes/stack.routes";

import { CreateNewMeal, Header, HomeContainer, Icon, Label } from "./styles";
import { useMeals } from "@hooks/useMeals";
import { useMealsDetails } from "@hooks/useMealDetails";

interface meal {
    date: Date;
    name: string;
    description: string;
    hasInDiet: boolean;
}

export function Home({navigation:{navigate}}:NativeStackScreenProps<ScreenProps,'Home'>){
    const {meals} = useMeals()
    const { posiveMeals,positiveMealSumary} = useMealsDetails()
    const {hasMorePositiveMealsThanNegative,porcentage} = positiveMealSumary

    console.log( posiveMeals)

    function handleNavigateToNewMealScreen(){
        navigate('NewMeal')
    }

    function handleNavigateToStatisticsScreen(){
        navigate('Statistics')
    }

    function handleNavigateToMealScreen(id: string){
        navigate('Meal',{id})
    }


    return (
        <HomeContainer>
            <Header>
                <Image source={LogoImage}/>
                <Avatar source={{uri:'https://github.com/joao472762.png'}}/>
            </Header>

            <Sumary  
                isPossive={hasMorePositiveMealsThanNegative}
                percentage={porcentage}
                onPress={handleNavigateToStatisticsScreen}
            />

            <CreateNewMeal>

                <Label >Refeições</Label>

                <Button
                    Icon={<Icon/>}
                    title="Nova refeição"
                    onPress={handleNavigateToNewMealScreen}
                />

            </CreateNewMeal>

            <Heading size="lg">
                12.08.22
            </Heading>

            <Card
                onPress={() => handleNavigateToMealScreen('hu')}
                hours="20:00"
                isInDiet
                name="X-tudo"
            />
            
        </HomeContainer>
    )
}