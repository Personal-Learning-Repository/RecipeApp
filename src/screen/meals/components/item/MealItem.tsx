import { memo } from "react";
import styles from "./Styles";
import { MealItemProps } from "./interface";
import { Image, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorProps } from "../../../../navigation/app";

const MealItem = ({ meal }: MealItemProps) => {
    const navigator = useNavigation<AppNavigatorProps>()

    const openRecipe = () => {
        navigator.navigate('Recipe', {meal: meal.idMeal})
    }

    return (
        <Pressable style={styles.container} onPress={openRecipe}>

            {
                meal.strMealThumb ?
                    <Image source={{ uri: meal.strMealThumb }} 
                        style={styles.cover}/>
                    :null
            }

            <Text style={styles.title}>{meal.strMeal}</Text>
        </Pressable>
    )
}

export default memo(MealItem)
