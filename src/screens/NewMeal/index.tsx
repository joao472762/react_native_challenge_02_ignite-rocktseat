import {  z } from "zod";
import { useState } from "react";
import {  useForm } from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod';
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Text } from "@components/Text";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Input } from "@components/Form/Input";
import { CardSelector } from "./components/CardSelector";
import { DateInput } from "@components/Form/DateInput";

import { 
    DateFitelds,
    NewMealContainer, 
    NewMealForm,
    Footer,
    DietSelector,
 
} from "./styles";

import { ScreenProps } from "@routes/stack.routes";

const newMealFormSchema = z.object({
    name: z.string().min(1,'nome não pode ficar vazio'),
    description: 
        z.string().
        min(1,'nome não pode ficar vazio')
        .max(245, 'descrição mutio grande'),
        date: z.string(),
        hours: z.string()
})

export type newMealFormSchemaData = z.infer<typeof newMealFormSchema>
export type newMealFormSchemaType = 'name' | 'description' | 'date' | 'hours' 

export function NewMeal({navigation}:NativeStackScreenProps<ScreenProps,'NewMeal'>){
    const [isInDiet, setIsInDiet] = useState<boolean | undefined>(undefined)

    const {control,handleSubmit,reset,formState:{errors}} = useForm<newMealFormSchemaData>({
        resolver: zodResolver(newMealFormSchema)
    })

    function createNewMeal(data:newMealFormSchemaData ){
        console.log(data)
        console.log(isInDiet)
        navigateToFarewellScreen()
        reset()
    }

    function navigateToFarewellScreen(){
        if(typeof(isInDiet) === 'boolean'){
            navigation.navigate('Farewell',{isInDiet: isInDiet })
        }

    }

    function navigateToHomeScreen(){
        navigation.navigate('Home')
    }


    function handleChangeDietState(dietState: boolean){
        setIsInDiet(dietState)
    }
    return  (
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
                    placeholder="Nome"
                />

                <Input
                    type="secundary"
                    label="Descrição"
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
                        placeholder= '01/01/2000'
                        error={errors.date && errors.date.message}
                        type="datetime"
                        options={{
                            format: 'DD/MM/YYYY'
                        }}

                    />
                    <DateInput
                        name="hours"
                        label="Hora"
                        control={control}
                        placeholder= '18:00'
                        error={errors.hours  && errors.hours.message}
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
    )
}