import { createContext,ReactNode, useEffect, useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    appIsLoading: boolean,
    positiveMealsSequence: number,
    deleteOneMeal: (id: string) => void
    addNewMeal: (newMeal: MealProps) => void
    updateOneMeal: (id: string, mealUpdated: MealProps) => void
}

export const MealsContext = createContext({} as MealsContextType)

export function MealsProvier({children}: MealsProvierProps) {
    const [meals, setMeals]  = useState<MealProps[]>([])
    const [appIsLoading, setAppIsLoading] = useState(true)
    const [positiveMealsSequence, setPosiveMealsSequence] = useState(0)

    const StorageKey = '@dailyDiet'
    const keyMealsStorage = `${StorageKey}/meals`
    const keyPositiveMealsSequence= `${StorageKey}/positiveMeals`


    async function addNewMeal(newMeal: MealProps ){
        const mealsWitMoreOne = [newMeal, ...meals]
         setMeals(mealsWitMoreOne)

         newMeal.isInDiet === true
            ? setPosiveMealsSequence(state => state + 1) 
            : setPosiveMealsSequence(0)

        const mealToStorage = JSON.stringify(mealsWitMoreOne)
        const PositiveMealsSequenceToStorage = JSON.stringify(positiveMealsSequence)

        await AsyncStorage.setItem(keyMealsStorage,mealToStorage)
        await AsyncStorage.setItem(keyPositiveMealsSequence,PositiveMealsSequenceToStorage)
    }

    async function deleteOneMeal(id: string){
        const mealsWithoutOneMeal = meals.filter(meal => meal.id !== id)
        setMeals(mealsWithoutOneMeal)

        const mealToStorage = JSON.stringify(mealsWithoutOneMeal)
        AsyncStorage.setItem(keyMealsStorage,mealToStorage)
    }

    function updateOneMeal(id: string, mealUpdated: MealProps){
        const mealWithOneMealUpdated = meals.map(meal => {
            if(meal.id === id){
                return mealUpdated
            }
            return meal
        })
        setMeals(mealWithOneMealUpdated)

        const mealToStorage = JSON.stringify(mealWithOneMealUpdated)
        AsyncStorage.setItem(keyMealsStorage,mealToStorage)
    }

    async function fetchMeals(){
        setAppIsLoading(true)
        try {
            const MealsStorage = await AsyncStorage.getItem(keyMealsStorage)
            if(MealsStorage){
                const mealsFetched= JSON.parse(MealsStorage)
                setMeals(mealsFetched)
            }
            
        } catch (error) {
            console.log(error)
        }
        finally {
            setAppIsLoading(false)
        }
    }

    async function fetchPositiveMealsSequence(){
        setAppIsLoading(true)
        try {
            const Storage = await AsyncStorage.getItem(keyPositiveMealsSequence)
            if(Storage){
                const PosiveMealsSequenceFetched = JSON.parse(Storage)
                setPosiveMealsSequence(PosiveMealsSequenceFetched)
            }
            
        } catch (error) {
            console.log(error)
        }
        finally {
            setAppIsLoading(false)
        }
    }

    useEffect(() => {
        fetchMeals()
        fetchPositiveMealsSequence()
    },[])

    return (
        <MealsContext.Provider value={{
            meals,
            appIsLoading,
            addNewMeal,
            deleteOneMeal,
            updateOneMeal,
            positiveMealsSequence}}
        >
            {children}
        </MealsContext.Provider>
    )
}