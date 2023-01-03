import {  z } from "zod";
import { useState } from "react";
import uuid from 'react-native-uuid';
import { Alert, Keyboard, TouchableWithoutFeedback} from "react-native";
import {  useForm } from "react-hook-form";
import  { zodResolver } from '@hookform/resolvers/zod';
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Text } from "@components/Text";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input } from "@components/Form/Input";
import { DateInput } from "@components/Form/DateInput";
import { CardSelector } from "../../components/CardSelector";

import { 
    DateFitelds,
    NewMealContainer, 
    NewMealForm,
    Footer,
    DietSelector,
 
} from "./styles";

import { ScreenProps } from "@routes/stack.routes";
import { dateRegex } from "@utils/regex/date";
import { timeRegex } from "@utils/regex/time";
import { useMeals } from "@hooks/useMeals";
import { MealProps } from "@context/MealsContext";

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

export function NewMeal({navigation}:NativeStackScreenProps<ScreenProps,'NewMeal'>){
    const [isInDiet, setIsInDiet] = useState<boolean | undefined>(undefined)
    const {addNewMeal} = useMeals()

    const {control,handleSubmit,reset,formState:{errors}} = useForm<newMealFormSchemaData>({
        resolver: zodResolver(newMealFormSchema)
    })

    function navigateToFarewellScreen(){
        if(typeof(isInDiet) === 'boolean'){
            navigation.navigate('Farewell',{isInDiet: isInDiet })
        }

    }

    function navigateToHomeScreen(){
        navigation.navigate('Home')
    }

    function createNewMeal(data:newMealFormSchemaData ){

        if(isInDiet === undefined){
            return Alert.alert('Está na dieta?','A refeição está na sua dieta?')
        }

        const {time,description,name,date} = data
        const [day,mounth, year] = date.split('/').map(dateInString => Number(dateInString))
        const [hours, minutes] = time.split(':').map(dateInString => Number(dateInString))

        const dateFormatd  = new Date(year,mounth,day,hours, minutes)

        const newMeal:MealProps = {
            id:uuid.v4() as string,
            name,
            description,
            date: dateFormatd,
            isInDiet: isInDiet as boolean,
        }

        addNewMeal(newMeal)
        
        reset()
        navigateToFarewellScreen()
    }

    function handleChangeDietState(dietState: boolean){
        setIsInDiet(dietState)
    }

    return  (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <NewMealContainer>
                <Header
                    onNavigate={navigateToHomeScreen}
                    title="Nova refeição"
                />
                <NewMealForm>

                    <Input
                        error={errors.name && errors.name.message}
                        label="Nome"
                        control={control}
                        name="name"
                        textAlignVertical="center"
                        placeholder="Nome da Refeição"
                      
                    />

                    <Input
                        type="secundary"
                        label="Descrição"
                        multiline
                        
                        error={errors.description && errors.description.message}
                        control={control}
                        name="description"
                        placeholder="Descrição"
                    />
    
                    <DateFitelds>
                        <DateInput
                            name="date"
                            label="Data"
                            control={control}
                            placeholder= '01/01/2022'
                            error={errors.date && errors.date.message}
                            type="datetime"
                            options={{
                                format: 'DD/MM/YYYY'
                            }}

                        />
                        <DateInput
                            name="time"
                            label="Hora"
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
                        onPress={handleSubmit(createNewMeal)}
                        title="Cadastrar refeição"
                    />

                </NewMealForm>
            </NewMealContainer>
        </TouchableWithoutFeedback>
    )
}