import { Text } from '@components/Text';
import {TouchableOpacityProps} from 'react-native'
import { CardContainer, CardStyledProps, DietIdicator, Title } from './styles';


interface CardProps extends TouchableOpacityProps{
    hours: string;
    name: string;
    isInDiet: CardStyledProps;
}

export function Card({isInDiet, name, hours, ...rest}: CardProps){
    return (
        <CardContainer {...rest}>
            <Text weight='Bold' size='xs' type='secundary'> {hours} </Text>
            <Title> {name} </Title>
            <DietIdicator isInDiet = {isInDiet}/>
        </CardContainer>
    )
}