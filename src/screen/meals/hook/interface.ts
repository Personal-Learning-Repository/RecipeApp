import { Meal } from "../../../data/model";

export interface UseListMealResult {
    isLoading: boolean,
    meals: Meal[],
}