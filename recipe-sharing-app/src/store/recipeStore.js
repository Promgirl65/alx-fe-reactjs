import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],

  // ADD a new recipe
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { id: Date.now(), ...recipe }]
    })),

  // UPDATE an existing recipe
  updateRecipe: (id, updatedData) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedData } : recipe
      )
    })),

  // DELETE a recipe
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id)
    }))
}));
export default useRecipeStore;