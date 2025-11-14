import './App.css'
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Recipe App</h1>

      {/* Add recipe form */}
      <AddRecipeForm />

      {/* Recipe list */}
      <RecipeList />
    </div>
  );
}

export default App;