// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetailsWrapper from './components/RecipeDetailsWrapper';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>Recipe App</h1>
        <AddRecipeForm />
        
        <Routes>
          {/* Main list of recipes */}
          <Route path="/" element={<RecipeList />} />

          {/* Recipe details page */}
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
