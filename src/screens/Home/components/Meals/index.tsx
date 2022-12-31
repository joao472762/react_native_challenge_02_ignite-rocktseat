import { format } from 'date-fns';
import {FlatList, TouchableOpacityProps} from 'react-native'

import { Text } from '@components/Text';
import { useMeals } from '@hooks/useMeals';
import { Heading } from '@components/Heading';
import { CardContainer, DietIdicator, MealsContainer, Title } from './styles';

interface MealsProps extends TouchableOpacityProps{
    date: Date,
    navigateToMealScreen: (id:string) => void
}

export function Meals({date,navigateToMealScreen}: MealsProps){

    const {meals} = useMeals()

    const mealsByMouthSelected = meals.filter(meal => {
        if(
            meal.date.getDate() === date.getDate() &&
            meal.date.getMonth() === date.getMonth() &&
            meal.date.getFullYear() === date.getFullYear()
        ){
            return meal
        }
    })

    function handleNavigateToMealScreen(id: string){
        navigateToMealScreen(id)
    }

    const dateFormated = format(date, "d'.'M'.'y")

    function formatDateTime(time: Date){
       const dateTimeFormated =  format(time, 'p').replace(/[a-z]/gi,'')

       return dateTimeFormated
    }

    return ( 
        <MealsContainer>

            <Heading size='lg'>{dateFormated}</Heading>

            <FlatList 
                data={mealsByMouthSelected}
                
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <CardContainer 
                        onPress={() => handleNavigateToMealScreen(item.id)}
                    >
                        <Text weight='Bold' size='xs' type='secundary'> {formatDateTime(item.date)} </Text>
                        <Title>{item.name}</Title>
                        <DietIdicator isInDiet = {item.isInDiet}/>
                    </CardContainer>

                )}
            />
        </MealsContainer>
    )
}