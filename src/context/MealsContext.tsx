import { createContext,ReactNode, useState } from "react"

interface MealsProvierProps  {
    children: ReactNode
}

export interface MealProps {
    id: string,
    date: Date;
    name: string;
    description: string;
    isInDiet: boolean;
}

interface MealsContextType {
    meals: MealProps[]
    addNewMeal: (newMeal: MealProps) => void
    positiveMealsSequence: number
}

export const MealsContext = createContext({} as MealsContextType)

export function MealsProvier({children}: MealsProvierProps) {
    const [meals, setMeals]  = useState<MealProps[]>([])
    const [positiveMealsSequence, setPosiveMealsSequence] = useState(0)


    function addNewMeal(newMeal: MealProps ){
         setMeals(state => [newMeal, ...state])
         newMeal.isInDiet === true   
            ? setPosiveMealsSequence(state => state + 1) 
            : setPosiveMealsSequence(0)
    }

    return (
        <MealsContext.Provider value={{meals,addNewMeal,positiveMealsSequence}}>
            {children}
        </MealsContext.Provider>
    )
}