import { useEffect, useState } from "react";
import { UseListRecipeResult } from "./interface";
import { Recipe } from "../../../data/model";
import { mealService } from "../../../data/service";

const useListRecipe = (meal: string): UseListRecipeResult => {
    const [isLoading, setIsLoading] = useState(false)
    const [recipe, setRecipe] = useState<Recipe[]>([])

    const getRecipe = async (): Promise<Recipe[]> => {
        const result = await mealService.getRecipe(meal)
        return result
    }

    useEffect(() => {
        const loadRecipe = async () => {
            setIsLoading(true)
            const result = await getRecipe()
            setIsLoading(false)
            setRecipe(result)
        }

        loadRecipe()
    }, [])

    return {
        isLoading,
        recipe
    }
}

export default useListRecipe
