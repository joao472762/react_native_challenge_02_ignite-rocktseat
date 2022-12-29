import { useContext } from "react";
import { MealsContext } from "@context/MealsContext";

export function useMeals(){
    const context = useContext(MealsContext)
    return context
}