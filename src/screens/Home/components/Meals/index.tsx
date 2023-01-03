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
        const mealDate = new Date(meal.date)
        
        if(
           mealDate.getDate() === date.getDate() &&
           mealDate.getMonth() === date.getMonth() &&
           mealDate.getFullYear() === date.getFullYear()
        ){
            return {
                ...meal,
                date: mealDate
            }
        }
    })

    function handleNavigateToMealScreen(id: string){
        navigateToMealScreen(id)
    }

    const dateFormated = format(date, "dd'.'MM'.'y")

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
                        activeOpacity={.7}
                        onPress={() => handleNavigateToMealScreen(item.id)}
                    >
                        <Text weight='Bold' size='xs' type='secundary'> {formatDateTime(new Date(item.date))} </Text>
                        <Title>{item.name}</Title>
                        <DietIdicator isInDiet = {item.isInDiet}/>
                    </CardContainer>
                )}
            />
        </MealsContainer>
    )
}