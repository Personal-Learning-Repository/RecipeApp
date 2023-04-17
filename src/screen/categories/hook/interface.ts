import { Category } from "../../../data/model";

export interface UseListCategoryResult {
    isLoading: boolean,
    categories: Category[],
}