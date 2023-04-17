import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "./interface";
import { ListCategories } from "../../screen/categories";
import { ListMeals } from "../../screen/meals";
import { ListRecipe } from "../../screen/recipe";

const Stack = createNativeStackNavigator<AppStackParamList>()

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Categories">
            <Stack.Screen name="Categories" component={ListCategories}/>
            <Stack.Screen name="Meals" component={ListMeals} />
            <Stack.Screen name="Recipe" component={ListRecipe} />
        </Stack.Navigator>
    )
}

export default AppNavigator
