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
        hasMorePositiveMealsThanNegative: positiveMealsPercentage >= 50 || positiveMealsPecentageFormated === '0'
    }

    const mealsByDate = meals.map(meal => {
        return meal.date
    })

    let mealsDateWithoutRepetition = <Date[]>[]

    for(let cureent of mealsByDate){

        let dateIndex = 0
        let dateAlreadyExist = false
        const currentInDate = new  Date(cureent)

        while ( mealsDateWithoutRepetition.length > dateIndex) {
            
            if(
                currentInDate.getMonth() === mealsDateWithoutRepetition[dateIndex].getMonth() &&
                currentInDate.getDate() === mealsDateWithoutRepetition[dateIndex].getDate() &&
                currentInDate.getFullYear() === mealsDateWithoutRepetition[dateIndex].getFullYear()
            ){
                dateAlreadyExist = true
                dateIndex = dateIndex + 1
                break
            }
            dateIndex = dateIndex + 1
        }

        if(dateAlreadyExist === false){
            mealsDateWithoutRepetition.push(currentInDate)
        }

    }

    return {
        posiveMeals,
        negativeMeals,
        positiveMealSumary,
        mealsDateWithoutRepetition
    }

}