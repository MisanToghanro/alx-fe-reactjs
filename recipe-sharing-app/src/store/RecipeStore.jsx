
import {create} from "zustand"

const useRecipeStore = create(set =>({
    recipes:[],

    searchTerm:"",

    setSearchTerm: (term) => set({searchTerm:term}),

    filteredRecipes:[],

    filterRecipes:() => set(state => ({
        filteredRecipes:state.recipes.filter(recipe => recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()))
    })),

    addRecipe:(recipe)=> set(state => ({recipes:[...state.recipes, recipe]})),

    deleteRecipe:(id) => set(state=> ({recipes:state.recipes.filter((recipe) => recipe.id !== id)})),

    updateRecipe:(updateRecipe) => set(state => ({
        recipes:state.recipes.map(recipe => recipe.id === updateRecipe.id ? updateRecipe : recipe)
    })),

    initRecipes:(initialRecipes)=> set(() => ({recipes:initialRecipes}))

}))

export default useRecipeStore;














/*import {create} from "zustand"

const useRecipeStore= create((set) => ({
    recipes:[],

    addRecipe:(recipe) => set ((state) => ({
        recipes: [...state.recipes , recipe]
    })),

    initRecipes:(initialRecipies)=> set(() => ({recipes:initialRecipies}))
}));

export default useRecipeStore;*/