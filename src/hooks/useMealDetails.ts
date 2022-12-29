
import { MealProps } from "@context/MealsContext"
import { useMeals } from "./useMeals"

export function useMealsDetails(){
    
    const  {meals} = useMeals()
    
    
    const mealsStatus = meals.reduce((acc, state) => {
        if(state.isInDiet){
            acc.posiveMeals.push(state)
        }
        else {
            acc.negativeMeals.push(state)
        }
        return acc
    },{posiveMeals: <MealProps[]>[], negativeMeals:  <MealProps[]>[]})
    
    const {negativeMeals,posiveMeals} = mealsStatus

    
    
    return {
        negativeMeals,
        posiveMeals,
    }

}