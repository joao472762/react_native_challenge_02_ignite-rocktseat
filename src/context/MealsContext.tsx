import { createContext,ReactNode, useState } from "react"

interface MealsProvierProps  {
    children: ReactNode
}

interface Meal {
    id: string,
    date: Date;
    name: string;
    description: string;
    isInDiet: boolean;
}

interface MealsContextType {
    meals: Meal[]
}

export const MealsContext = createContext({} as MealsContextType)

export function MealsProvier({children}: MealsProvierProps) {
    const [meals, setMeals]  = useState<Meal[]>([])

    return (
        <MealsContext.Provider value={{meals}}>
            {children}
        </MealsContext.Provider>
    )
}