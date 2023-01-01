import { Controller } from 'react-hook-form'
import { Control } from 'react-hook-form/dist/types'
import { TextInputMaskProps } from 'react-native-masked-text'

import {DateInput as InputComponent} from '@components/DateInput'
import { newMealFormSchemaData, newMealFormSchemaType } from '@screens/NewMeal'

interface InputProps extends TextInputMaskProps {
    control: Control<newMealFormSchemaData>
    name: newMealFormSchemaType;
    label?: string,
    error?: string,
    inputType?: 'primary' | 'secondary' 
}

export function DateInput({control,name,label,error,style,inputType='secondary',...rest}: InputProps){
    return (
        <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
            <InputComponent.Root style={{
                width: inputType === 'primary' ? '100%' : '48%',
                marginTop:24
            }}>

                {label && <InputComponent.Label title={label}/>}
               
                <InputComponent.Input
                   
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    {...rest}
                />
                {error && <InputComponent.Error error={error.replace(/required/gi,'Requerido')}  />}
            </InputComponent.Root>
            
        )}
        name={name}
      />
    )
}