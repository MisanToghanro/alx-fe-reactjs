
  // RecipeList component
  import useRecipeStore from "./recipestore";
import { NavLink } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import React from 'react'


const RecipeListComponent = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const filterRecipes = useRecipeStore(state=> state.filterRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);


  React.useEffect(() => {
    filterRecipes();
  }, [searchTerm])


  return(
    <div>
      {recipes.map(recipe=>(
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          
        </div>
      ))}

<SearchBar />  {/* Add the SearchBar component here */}
{filteredRecipes.map(recipe => (
            <div key={recipe.id}>
             <h3>{recipe.id}</h3>
             <p>{recipe.description}</p>
             <NavLink to={`/recipe/${recipe.id}`}>View Details</NavLink> {/* Link to RecipeDetails */}
            </div>
          ))}
    </div>
  )
}

export default RecipeListComponent;


