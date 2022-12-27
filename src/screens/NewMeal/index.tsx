import {  z } from "zod";
import { useState } from "react";
import {  useForm } from "react-hook-form";
import { TouchableOpacity } from "react-native";
import {zodResolver} from '@hookform/resolvers/zod';

import { Button } from "@components/Button";
import { Input } from "@components/Form/Input";
import { DateInput } from "@components/Form/DateInput";

import { 
    Icon, 
    Title,
    Header,
    DateFitelds,
    NewMealContainer, 
    NewMealForm,
    Footer,
    DietSelector,
 
} from "./styles";
import { Text } from "@components/Text";
import { CardSelector } from "./components/CardSelector";

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

export function NewMeal(){
    const [isInDiet, setIsInDiet] = useState<boolean | undefined>(undefined)

    const {control,handleSubmit,reset,formState:{errors}} = useForm<newMealFormSchemaData>({
        resolver: zodResolver(newMealFormSchema)
    })

    function createNewMeal(data:newMealFormSchemaData ){
        console.log(data)
        console.log(isInDiet)
        reset()
    }

    function handleChangeDietState(dietState: boolean){
        setIsInDiet(dietState)
    }
    return  (
        <NewMealContainer>
            <Header>
                <TouchableOpacity>
                    <Icon/>
                </TouchableOpacity>
                <Title size="lg">Nova refeição</Title>
            </Header>
            <NewMealForm>

                <Input
                    error={errors.name && errors.name.message}
                    label="Nome"
                    control={control}
                    name="name"
                    placeholder="Nome"
                />

                <Input
                    label="Descrição"
                    error={errors.description && errors.description.message}
                    control={control}
                    name="description"
                    placeholder="Descrição"
                />


                <DateFitelds>
                    <DateInput
                        type="datetime"
                        control={control}
                        options={{
                            format: 'DD/MM/YYYY'
                        }}
                        error={errors.date && errors.date.message}
                        name="date"
                        label="Data"

                    />
                    <DateInput
                        type="datetime"
                        control={control}
                        label="Hora"
                        options={{
                            format: 'HH:mm'
                        }}
                        error={errors.hours  && errors.hours.message}
                        name="hours"
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
                            title='sim'
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