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

    const mealsByDate = meals.map(meal => {
        return meal.date
    })

    let mealsDateWithoutRepetition = <Date[]>[]

    for(let cureent of mealsByDate){

        let dateAlreadyExist = false
        let dateIndex = 0

        while ( mealsDateWithoutRepetition.length > dateIndex) {
            
            if(
                cureent.getMonth() === mealsDateWithoutRepetition[dateIndex].getMonth() &&
                cureent.getDate() === mealsDateWithoutRepetition[dateIndex].getDate() &&
                cureent.getFullYear() === mealsDateWithoutRepetition[dateIndex].getFullYear()
            ){
                dateAlreadyExist = true
                dateIndex = dateIndex + 1
                break
            }
            dateIndex = dateIndex + 1
        }

        if(dateAlreadyExist === false){
            mealsDateWithoutRepetition.push(cureent)
        }

    }

    return {
        posiveMeals,
        negativeMeals,
        positiveMealSumary,
        mealsDateWithoutRepetition
    }

}