
import { MealProps } from "@context/MealsContext"
import { useMeals } from "./useMeals"



export function useMealsDetails(){
    
    const  {meals} = useMeals()
    const negativeMeals = meals.filter(meal => !meal.isInDiet)

    const posiveMeals = meals.filter(meal => meal.isInDiet)
    const positiveMealsPercentage = (posiveMeals.length * 100) / meals.length 
    const positiveMealsPecentageFormated = (  
        String(positiveMealsPercentage) === 'NaN' ? '0' : positiveMealsPercentage.toFixed(2)
    )
    
    const positiveMealSumary = {
        porcentage: positiveMealsPecentageFormated ?? 0,
        hasMorePositiveMealsThanNegative: positiveMealsPercentage >= 50 
    }

    
    return {
        posiveMeals,
        positiveMealSumary,
        negativeMeals
    }

}