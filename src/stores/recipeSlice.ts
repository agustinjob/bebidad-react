import { StateCreator } from "zustand"
import { getCategories, getRecipies } from "../services/RecipeService"
import { Categories, Drinks, SearchFilter } from "../types"


export type RecipiesSliceType = {
    categories: Categories,
    drinks: Drinks,
    fetchCategories: () => Promise<void>
    searchRecipies: (searchFilters: SearchFilter) => Promise<void>
}

export const createRecipesSlice: StateCreator<RecipiesSliceType> = (set) => ({
    categories: { drinks: [] },
    drinks: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })

    },
    searchRecipies: async (searchFilters) => {
        const drinks = await getRecipies(searchFilters)
        set({ drinks })
    }
})