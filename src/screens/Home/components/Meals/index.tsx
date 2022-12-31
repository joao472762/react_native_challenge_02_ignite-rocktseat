import {FlatList, TouchableOpacityProps} from 'react-native'
import { Text } from '@components/Text';

import { CardContainer, DietIdicator, MealsContainer, Title } from './styles';
import { Heading } from '@components/Heading';
import { useMeals } from '@hooks/useMeals';


interface MealsProps extends TouchableOpacityProps{
    date: Date,
    navigateToMealScreen: (id:string) => void
}

export function Meals({date,navigateToMealScreen}: MealsProps){

    const {meals} = useMeals()

    const mealsByMouthSelected = meals.filter(meal => {
        if(meal.date.getMonth() === date.getMonth()){
            return meal
        }
    })

    function handleNavigateToMealScreen(id: string){
        navigateToMealScreen(id)
    }


    return ( 
        <MealsContainer>

            <Heading size='lg'>{date.toDateString()}</Heading>

            <FlatList 
                data={mealsByMouthSelected}
                
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <CardContainer 
                        onPress={() => handleNavigateToMealScreen(item.id)}
                    >
                        <Text weight='Bold' size='xs' type='secundary'> {item.date.getHours()} </Text>
                        <Title>{item.name}</Title>
                        <DietIdicator isInDiet = {item.isInDiet}/>
                    </CardContainer>

                )}
            />
        </MealsContainer>
    )
}