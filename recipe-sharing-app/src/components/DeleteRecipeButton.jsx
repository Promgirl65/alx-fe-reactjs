// src/components/DeleteRecipeButton.jsx
import useRecipeStore from '../store/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <button
      style={{ marginTop: '10px', backgroundColor: 'red', color: 'white' }}
      onClick={() => deleteRecipe(recipeId)}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
