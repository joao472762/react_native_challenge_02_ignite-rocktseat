import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";

export function Router(){
    return (
        <NavigationContainer>
            <StackRoutes/>
        </NavigationContainer>

    )
}