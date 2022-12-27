import { Controller } from 'react-hook-form'
import { TextInputProps } from 'react-native'
import { Control } from 'react-hook-form/dist/types'

import {Input as InputComponent} from '@components/Input'
import { newMealFormSchemaData, newMealFormSchemaType } from '@screens/NewMeal'

interface InputProps extends TextInputProps {
    control: Control<newMealFormSchemaData>
    name: newMealFormSchemaType;
    label?: string,
    error?: string,
    type?: 'primary' | 'secundary'
}

export function Input({control,name,label,error,style,type='primary',...rest}: InputProps){
    return (
        <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
            <InputComponent.Root style={{
                width: type === 'primary' ? '100%' : '48%',
                marginTop:24
            }}>

                {label && <InputComponent.Label title={label}/>}
               
                <InputComponent.Input
                    {...rest}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                />
                {error && <InputComponent.Error error={error}  />}
            </InputComponent.Root>
            
        )}
        name={name}
      />
    )
}