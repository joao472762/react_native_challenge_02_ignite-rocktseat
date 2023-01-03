import { NavigationContainer } from "@react-navigation/native";

import { Loader } from "@components/Loader";
import { useMeals } from "@hooks/useMeals";

import { StackRoutes } from "./stack.routes";

export function Router(){
    const {appIsLoading} = useMeals()
    return (
        <NavigationContainer>
                {appIsLoading ? <Loader/> : <StackRoutes/>}
        </NavigationContainer>

    )
}