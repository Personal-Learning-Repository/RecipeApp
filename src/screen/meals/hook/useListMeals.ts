import { useEffect, useState } from "react";
import { UseListMealResult } from "./interface";
import { Meal } from "../../../data/model";
import { mealService } from "../../../data/service";

const useListMeals = (category: string): UseListMealResult => {
    const [isLoading, setIsLoading] = useState(false)
    const [meals, setMeals] = useState<Meal[]>([])

    const getMeals = async (): Promise<Meal[]> => {
        const result = await mealService.getMeals(category)
        return result
    }

    useEffect(() => {
        const loadMeals = async () => {
            setIsLoading(true)
            const result = await getMeals()
            setIsLoading(false)
            setMeals(result)
        }
        
        loadMeals()
    }, [])

    return {
        isLoading,
        meals,
    }
}

export default useListMeals
