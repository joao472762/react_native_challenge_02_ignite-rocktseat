import { MealsProvier } from "@context/MealsContext";
import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";

export function Router(){
    return (
        <NavigationContainer>
            <MealsProvier>
                <StackRoutes/>
            </MealsProvier>
        </NavigationContainer>

    )
}