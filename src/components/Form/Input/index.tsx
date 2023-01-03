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
                
                marginTop:24
            }}>

                {label && <InputComponent.Label title={label}/>}
               
                <InputComponent.Input
                    onBlur={onBlur}
                    style={[
                        type === 'secundary' && {
                            minHeight:120,
                    
                        }
                    ]}
                    textAlignVertical='top'
                    onChangeText={onChange}
                    value={value}
                    {...rest}
                />
                {
                error && 
                    <InputComponent.Error error={error.replace(/required/gi,'Requerido')}  />}
            </InputComponent.Root>
            
        )}
        name={name}
      />
    )
}