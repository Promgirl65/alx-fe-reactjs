import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: 'Spaghetti', description: 'Delicious spaghetti with tomato sauce' },
    { id: 2, title: 'Pancakes', description: 'Fluffy pancakes with syrup' }
  ],
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
}));

export default useRecipeStore;
