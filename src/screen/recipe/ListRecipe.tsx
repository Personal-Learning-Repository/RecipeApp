import { useRoute } from "@react-navigation/native"
import { ListRecipeRouteProp } from "./interface"
import useListRecipe from "./hook/useListRecipes"
import { Image, ScrollView, Text, View } from "react-native"
import { LoaderIndicator } from "./components/loader"
import styles from "./Styles"

const ListRecipe = () => {
    const { params: {meal}} = useRoute<ListRecipeRouteProp>()

    const { isLoading, recipe } = useListRecipe(meal)
    
    if (isLoading) {
        return <LoaderIndicator />
    }

    const { strInstructions, strMeal, strMealThumb } = recipe?.[0] ?? {}
    
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.container}>

                {
                    strMealThumb ?
                        <Image source={{ uri: strMealThumb }} style={styles.image} />
                        :null
                }
                
                <Text style={styles.title}>{strMeal}</Text>
                <Text style={styles.content}>{strInstructions}</Text>
            </View>
        </ScrollView>
    )
}

export default ListRecipe
