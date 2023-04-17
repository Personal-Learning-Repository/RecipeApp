import { Recipe } from "../../../data/model";

export interface UseListRecipeResult {
    isLoading: boolean,
    recipe: Recipe[],
}
