import { useParams } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';

const RecipeDetailsWrapper = () => {
  const { id } = useParams(); // Get recipe ID from URL
  return <RecipeDetails recipeId={parseInt(id)} />;
};

export default RecipeDetailsWrapper;