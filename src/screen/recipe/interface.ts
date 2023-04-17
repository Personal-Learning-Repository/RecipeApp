import { RouteProp } from "@react-navigation/native"
import { AppStackParamList } from "../../navigation/app/interface"

export type ListRecipeScreenParams = {
    meal: string,
}

export type ListRecipeRouteProp = RouteProp<AppStackParamList, 'Recipe'>
