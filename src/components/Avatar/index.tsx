import {ImageProps} from 'react-native'
import { AvatartContent } from './styles'

interface AvatarProps extends ImageProps {}

export function Avatar(props: AvatarProps){
    return (

        <AvatartContent {...props} />
    )


} 