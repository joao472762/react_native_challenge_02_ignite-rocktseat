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
}

export const MealsContext = createContext({} as MealsContextType)

export function MealsProvier({children}: MealsProvierProps) {
    const [meals, setMeals]  = useState<MealProps[]>([])

    function addNewMeal(newMeal: MealProps ){
         setMeals(state => [newMeal, ...meals])
    }

    return (
        <MealsContext.Provider value={{meals,addNewMeal}}>
            {children}
        </MealsContext.Provider>
    )
}