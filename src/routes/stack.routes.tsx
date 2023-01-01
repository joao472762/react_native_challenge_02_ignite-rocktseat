import { Home } from "@screens/Home";
import { Meal } from "@screens/Meal";
import { NewMeal } from "@screens/NewMeal";
import { Farewell } from "@screens/Farewell";
import { Statistics } from "@screens/Statistics";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EditMeal } from "@screens/EditMeal";

export type ScreenProps = {
    Home: undefined,
    NewMeal: undefined,
    Statistics: undefined,
    EditMeal: {
        id: string,
    },
    Meal: {
        id: string
    }
    Farewell: {
        isInDiet: boolean
    }
}

const {Navigator,Screen}  = createNativeStackNavigator<ScreenProps>()

export function StackRoutes(){
    return (
        <Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
            <Screen name="Home" component={Home} />
            <Screen name="Meal" component={Meal} />
            <Screen name="NewMeal" component={NewMeal} />
            <Screen name="Farewell" component={Farewell} />
            <Screen name="EditMeal" component={EditMeal} />
            <Screen name="Statistics" component={Statistics} />
        </Navigator>

    )
}