import { RouteProp } from "@react-navigation/native"
import { AppStackParamList } from "../../navigation/app/interface"

export type ListMealsScreenParams = {
    category: string,
}

export type ListMealsRouteProp = RouteProp<AppStackParamList, 'Meals'>
