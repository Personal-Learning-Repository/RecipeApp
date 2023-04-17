import { useEffect, useState } from "react";
import { UseListCategoryResult } from "./interface";
import { Category } from "../../../data/model";
import { mealService } from "../../../data/service";

const useListCategories = (): UseListCategoryResult => {
    const [isLoading, setIsLoading] = useState(false)
    const [categories, setCategories] = useState<Category[]>([])

    const getCategories = async (): Promise<Category[]> => {
        const result = await mealService.getCategories()
        return result
    }

    useEffect(() => {
        const loadCategories = async () => {
            setIsLoading(true)
            const result = await getCategories()
            setIsLoading(false)
            setCategories(result)
        }

        loadCategories()
    }, [])

    return{
        isLoading,
        categories,
    }
}

export default useListCategories
