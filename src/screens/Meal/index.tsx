import { format } from "date-fns";
import { useState } from "react";
import { useTheme } from "styled-components/native";
import { PencilSimpleLine,Trash } from "phosphor-react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";


import { Text } from "@components/Text";
import { Button } from "@components/Button";
import { Modal } from "./components/Modal";
import { Heading } from "@components/Heading";
import { Header,HeaderType } from "@components/Header";

import { useMeals } from "@hooks/useMeals";
import { MealProps } from "@context/MealsContext";
import { ScreenProps } from "@routes/stack.routes";

import { MealContainer,MealContent,DietStatus,DietIndicator,Footer} from "./styles";

export function Meal({navigation,route}:NativeStackScreenProps<ScreenProps,'Meal'>) {
    const {meals} = useMeals()
    const [modalState, setModalState] = useState(false)
    const {id} = route.params

    function showModal(){
        setModalState(true)

    }

    function closeModal(){
        setModalState(false)
    }
    
    function navigateToHomeScreen(){
        navigation.navigate('Home')
    }

    function navigetToEditMealScreen(){
        navigation.navigate('EditMeal',{id: id})
    }

    const meal = meals.find(Meal => Meal.id === id)

    const mealConfirmed = meal ? meal : {} as MealProps

    const headerType: HeaderType = mealConfirmed.isInDiet ? 'positive' : 'negative'
    const {colors} = useTheme()

    const calendar = format(mealConfirmed?.date,"dd'/'MM'/'y")
    const dateTime = format(mealConfirmed?.date , 'p').replace(/[a-z]/gi,'')


    return (
        <MealContainer isInDiet={mealConfirmed.isInDiet}>
            <Header 
                title="Refeição" 
                type={headerType} 
                onNavigate={navigateToHomeScreen}
            />
            <MealContent>
                <Heading  size="2lg">{meal?.name}</Heading>
                <Text type="secundary" style={{textAlign: 'left',marginTop:4}}>
                    {mealConfirmed.description}
                </Text>

                <Text weight="Bold"  style={{marginTop: 24}}>Data e hora</Text>
                <Text type="secundary">{calendar} às {dateTime}</Text>


                <DietStatus>
                    <DietIndicator isInDiet={mealConfirmed.isInDiet}/>
                    <Text>
                        {mealConfirmed.isInDiet ? 'dentro da dieta' : 'fora da dieta'}
                    </Text>
                </DietStatus>

                <Footer>
                    <Button
                       onPress={navigetToEditMealScreen}
                        Icon={<PencilSimpleLine color={colors.white} size={18} />}
                        title="Editar refeição"
                    />

                    <Button
                        type="secundary"
                        onPress={showModal}
                        style={{marginTop:8}}
                        Icon={<Trash color={colors.gray[900]} size={18} />}
                        title="Excluir refeição"
                    />
                </Footer>
            </MealContent>
            <Modal
                navigateToHomeScreen={navigateToHomeScreen}
                
                visible={modalState}
                closeModal={closeModal}
                mealId = {mealConfirmed.id}
            />
        </MealContainer>
    )
}