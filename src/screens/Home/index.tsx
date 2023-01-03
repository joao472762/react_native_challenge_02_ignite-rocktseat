import { FlatList, Image} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import uuid from 'react-native-uuid'
import LogoImage from '@assets/Logo.png';

import { Meals } from "./components/Meals";
import { Avatar } from "@components/Avatar";
import { Sumary } from "./components/Sumary";
import { Button } from "../../components/Button";


import { ScreenProps } from "@routes/stack.routes";

import { CreateNewMeal, Header, HomeContainer, Icon, Label } from "./styles";
import { useMealsDetails } from "@hooks/useMealDetails";

export function Home({navigation:{navigate}}:NativeStackScreenProps<ScreenProps,'Home'>){

    const { positiveMealSumary,mealsDateWithoutRepetition,negativeMeals,posiveMeals} = useMealsDetails()
    const {hasMorePositiveMealsThanNegative} = positiveMealSumary

    const hasOnlyNegativeMeals = posiveMeals.length === 0   && negativeMeals.length > 0
    const pectentage = hasOnlyNegativeMeals ? '100' : positiveMealSumary.porcentage
   
    function handleNavigateToNewMealScreen(){
        navigate('NewMeal')
    }

    function handleNavigateToStatisticsScreen(){
        navigate('Statistics')
    }

    function navigateToMealScreen(id: string){
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
                percentage={pectentage}
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

            
            <FlatList
                data={mealsDateWithoutRepetition}
                keyExtractor={item => uuid.v4() as string}
                renderItem={({item}) => (
                        <Meals
                            navigateToMealScreen={navigateToMealScreen}
                            date={item}
                        />

                )}
            />
            
        </HomeContainer>
    )
}