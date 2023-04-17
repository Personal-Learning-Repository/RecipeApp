export const MEAL_DB_BASE_URL = "https://www.themealdb.com/api/json/v1/1/"

export const GET_CATEGORIES = 'categories.php'
export const GET_MEALS = (category: string) => `filter.php?c=${category}`
export const GET_RECIPE = (meal: string) => `lookup.php?i=${meal}`
