import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ListMealsScreenParams } from "../../screen/meals/interface"
import { ListRecipeScreenParams } from "../../screen/recipe/interface"

export type AppStackParamList = {
    Categories: undefined,
    Meals: ListMealsScreenParams,
    Recipe: ListRecipeScreenParams,
}

export type AppNavigatorProps = NativeStackNavigationProp<AppStackParamList>
