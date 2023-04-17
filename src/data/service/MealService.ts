import { ApiConfig } from "../../config/api";
import { httpClient } from "../../infra/http";
import { Categories, Category, Meal, Meals } from "../model";
import { Recipe } from "../model/Recipe";
import { Recipes } from "../model/Recipes";

export const getCategories = async (): Promise<Category[]> => {
    const response = await httpClient.get<Categories>(ApiConfig.GET_CATEGORIES)
    return response.data.categories
}

export const getMeals = async (category: string): Promise<Meal[]> => {
    const response = await httpClient.get<Meals>(ApiConfig.GET_MEALS(category))
    return response.data.meals
}

export const getRecipe = async (meal: string): Promise<Recipe[]> => {
    const response = await httpClient.get<Recipes>(ApiConfig.GET_RECIPE(meal))
    return response.data.meals
}
