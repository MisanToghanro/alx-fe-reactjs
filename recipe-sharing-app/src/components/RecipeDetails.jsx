import useRecipeStore from "./recipestore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";
import { useParams } from "react-router-dom";


const RecipeDetails = () => {
 
    const {recipeId} = useParams();
    const recipe = useRecipeStore(state => state.recipes.find(recipe => recipe.id === parseInt(recipeId ,10)));


    if (!recipe){
        return<p>recipe not found</p>
    }

    return(
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <EditRecipeForm recipe={recipe} /> {/* Pass the recipe to EditRecipeForm */}
            <DeleteRecipeButton recipeId={recipe.id} /> {/* Pass the recipeId to DeleteRecipeButton */}
        </div>
    )

}

export default RecipeDetails;