import { CategoryItemProps } from "./interface";
import { Image, Pressable, Text } from "react-native";
import { memo } from "react";
import styles from "./Styles";
import { AppNavigatorProps } from "../../../../navigation/app";
import { useNavigation } from "@react-navigation/native";

const CategoryItem = ({ category }: CategoryItemProps) => {
    const navigator = useNavigation<AppNavigatorProps>()

    const openMeals = () => {
        navigator.navigate('Meals', {category: category.strCategory})
    }

    return (
        <Pressable style={styles.container} onPress={openMeals}>

            {
                category.strCategoryThumb ?
                    <Image source={{ uri: category.strCategoryThumb }} 
                        style={styles.cover}/>
                    :null
            }

            <Text style={styles.title}>{category.strCategory}</Text>
            <Text style={styles.description}>{category.strCategoryDescription}</Text>
        </Pressable>
    )
}

export default memo(CategoryItem)
