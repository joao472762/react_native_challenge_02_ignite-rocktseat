import { Text } from "@components/Text";
import PositiveIlustration from '@assets/dietPositive.png'
import NegativeIlustration from '@assets/neagativeDiet.png'

import {  Button, FarewellContainer, Ilustration, Title } from "./styles";

export function Farewell(){
    const  isInDiet = false

    return  (
        <FarewellContainer>

            <Title  isInDiet={isInDiet}>
                {isInDiet ? 'Continue assim!' : 'Que pena!'}
            </Title>

            { isInDiet 
            ?(
                <>
                    <Text>Você continua  
                        <Text weight="Bold"> dentro da dieta</Text> Muito bem!
                    </Text>
  
                    <Ilustration source={PositiveIlustration}/> 
                
                </>
            )
            :(
                <>
                    <Text>
                        Você 
                        <Text weight="Bold"> saiu da dieta</Text> 
                        dessa vez, mas continue 
                        {'\n'} se esforçando e não desista!
                    </Text>

                    <Ilustration source={NegativeIlustration}/>
                
                </>
            )}


            <Button title="Ir para a página inicial"/>  

        </FarewellContainer>
    )
}