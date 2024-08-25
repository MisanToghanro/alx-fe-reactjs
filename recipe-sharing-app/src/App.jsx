import RecipeListComponent from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import { Routes,Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <>
       <Navbar/>
      <Routes>
        <Route path ="/" element={<RecipeListComponent/>}/>
        <Route path ="/recipe/:recipeId" element={<RecipeDetails/>}/>
        <Route path ="add-recipe-form" element={<AddRecipeForm/>}/>
      </Routes>
      </>
  )
}

export default App
