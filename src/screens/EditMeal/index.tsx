import {  z } from "zod";
import { useState } from "react";
import { format } from "date-fns";
import {  useForm } from "react-hook-form";
import  { zodResolver } from '@hookform/resolvers/zod';
import { Alert, Keyboard, TouchableWithoutFeedback} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Text } from "@components/Text";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input } from "@components/Form/Input";
import { DateInput } from "@components/Form/DateInput";
import { CardSelector } from "@components/CardSelector";

import { useMeals } from "@hooks/useMeals";
import { ScreenProps } from "@routes/stack.routes";
import { MealProps } from "@context/MealsContext";

import { timeRegex } from "@utils/regex/time";
import { dateRegex } from "@utils/regex/date";

import { DateFitelds, DietSelector, EditMealContainer, EditMealForm, Footer } from "./styles";


const newMealFormSchema = z.object({
    name: z.string().min(1,'nome não pode ficar vazio'),
    description: 
        z.string().
        min(1,'nome não pode ficar vazio')
        .max(245, 'descrição mutio grande'),
    date: z.string().regex(dateRegex,'data inválida'),
    time: z.string().regex(timeRegex,'horário incorreto')
})


export type newMealFormSchemaData = z.infer<typeof newMealFormSchema>
export type newMealFormSchemaType = 'name' | 'description' | 'date' | 'time' 


export function EditMeal({navigation,route}:NativeStackScreenProps<ScreenProps,'EditMeal'>){
    const {meals} = useMeals()
    const [isInDiet, setIsInDiet] = useState<boolean | undefined>(undefined)
    const {updateOneMeal} = useMeals()

    const {id} = route.params

    const meal = meals.find(Meal => Meal.id === id)
    const mealConfirmed = meal ? meal : {} as MealProps

    const calendar = format(mealConfirmed.date,"d'/'M'/'y")
    const dateTime = format(mealConfirmed.date , 'p').replace(/[a-z]/gi,'')

    const {control,handleSubmit,reset,formState:{errors}} = useForm<newMealFormSchemaData>({
        resolver: zodResolver(newMealFormSchema),
        defaultValues: {
            name: mealConfirmed.name,
            description: mealConfirmed.description,
            date: calendar
        }
        
    })

    function navigateToHomeScreen(){
        navigation.navigate('Home')
    }

    function editNewMeal(data:newMealFormSchemaData ){

        if(isInDiet === undefined){
            return Alert.alert('Está na dieta?','A refeição está na sua dieta?')
        }

        const {time,description,name,date} = data
        const [day,mounth, year] = date.split('/').map(dateInString => Number(dateInString))
        const [hours, minutes] = time.split(':').map(dateInString => Number(dateInString))

        const dateFormatd  = new Date(year,mounth,day,hours, minutes)

        const mealUpdated:MealProps = {
            id: id,
            name,
            description,
            date: dateFormatd,
            isInDiet: isInDiet as boolean,
        }

        updateOneMeal(id,mealUpdated)
        
        reset()
        navigateToHomeScreen()
    }

    function handleChangeDietState(dietState: boolean){
        setIsInDiet(dietState)
    }
    return (
        <EditMealContainer>
                <Header
                    onNavigate={navigateToHomeScreen}
                    title="Editar refeição"
                />
                <EditMealForm>

                    <Input
                        error={errors.name && errors.name.message}
                        label="Nome"
                        control={control}
                        name="name"
                        defaultValue={mealConfirmed.name}
                        placeholder="Nome"
                    />

                    <Input
                        type="secundary"
                        label="Descrição"
                        error={errors.description && errors.description.message}
                        control={control}
                        name="description"
                        defaultValue={mealConfirmed.description}
                        placeholder="Descrição"
                    />
    
                    <DateFitelds>
                        <DateInput
                            name="date"
                            label="Data"
                            control={control}
                            placeholder= '01/01/2022'
                            defaultValue={calendar}
                            error={errors.date && errors.date.message}
                            type="datetime"
                            options={{
                                format: 'DD/MM/YYYY'
                            }}

                        />
                        <DateInput
                            name="time"
                            label="Hora"
                            defaultValue={dateTime}
                            control={control}
                            placeholder= '18:00'
                            error={errors.time  && errors.time.message}
                            type="datetime"
                            options={{
                                format: 'HH:mm'
                            }}
                        />  
                    
                    </DateFitelds>

                    <Footer>
                        <Text 
                            size="sm" 
                            type="secundary" 
                            weight="Bold"
                        > 
                            Está dentro da dieta?
                        </Text>
                        <DietSelector>
                            <CardSelector
                                onPress={() => handleChangeDietState(true)}
                                type={'positive'}
                                isSelected={isInDiet === true}
                                title='sim'
                            />

                            <CardSelector
                                onPress={() => handleChangeDietState(false)}
                                type={'negative'}
                                isSelected={ isInDiet === false}
                                title='não'
                            />

                        </DietSelector>
                    </Footer>

                    <Button
                        style={{marginTop: 'auto'}}
                        onPress={handleSubmit(editNewMeal)}
                        title="Salvar alterações"
                    />

                </EditMealForm>
        </EditMealContainer>
    )
}