import { Home } from "@screens/Home";
import { Meal } from "@screens/Meal";
import { NewMeal } from "@screens/NewMeal";
import { Farewell } from "@screens/Farewell";
import { Statistics } from "@screens/Statistics";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type StackScreenProps = {
    Home: undefined,
    NewMeal: undefined,
    Statistics: undefined,
    Meal: {
        id: string
    }
    Farewell: {
        isInDiet: boolean
    }
}

const {Navigator,Screen}  = createNativeStackNavigator<StackScreenProps>()

export function StackRoutes(){
    return (
        <Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
            <Screen name="Home" component={Home} />
            <Screen name="Meal" component={Meal} />
            <Screen name="NewMeal" component={NewMeal} />
            <Screen name="Farewell" component={Farewell} />
            <Screen name="Statistics" component={Statistics} />
        </Navigator>

    )
}