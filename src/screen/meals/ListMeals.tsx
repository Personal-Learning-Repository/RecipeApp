import { useCallback } from "react"
import { MealItem } from "./components/item"
import useListMeals from "./hook/useListMeals"
import { FlatList, ListRenderItemInfo } from "react-native"
import { Meal } from "../../data/model"
import { LoaderIndicator } from "./components/loader"
import { useRoute } from "@react-navigation/native"
import { ListMealsRouteProp } from "./interface"

const ListMeals = () => {
    const { params: {category}} = useRoute<ListMealsRouteProp>()

    const { isLoading, meals } = useListMeals(category)

    const renderMeal = useCallback(({ item }: ListRenderItemInfo<Meal>) =>
        <MealItem meal={item} />, [])
    
    const mealKeyExtractor = (_: Meal, index: number) => index.toString()

    if (isLoading) {
        return <LoaderIndicator />
    }

    return (
        <FlatList
            data={meals}
            renderItem={renderMeal}
            keyExtractor={mealKeyExtractor}
        />
    )
}

export default ListMeals
