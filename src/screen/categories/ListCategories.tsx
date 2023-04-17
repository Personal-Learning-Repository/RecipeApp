import { useCallback } from "react"
import useListCategories from "./hook/useListCategories"
import { FlatList, ListRenderItemInfo } from "react-native"
import { CategoryItem } from "./components/item"
import { Category } from "../../data/model"
import { LoaderIndicator } from "./components/loader"

const ListCategories = () => {
    const { isLoading, categories } = useListCategories()

    const renderCategory = useCallback(({ item }: ListRenderItemInfo<Category>) => 
        <CategoryItem category={item}/>, [])

    const categoryKeyExtractor = (_: Category, index: number) => index.toString()

    if (isLoading) {
        return <LoaderIndicator />
    }

    return (
        <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={categoryKeyExtractor}
        />
    )
}

export default ListCategories
