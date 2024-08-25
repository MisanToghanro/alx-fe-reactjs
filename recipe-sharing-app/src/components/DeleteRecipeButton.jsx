import useRecipeStore from "../store/RecipeStore";

const DeleteRecipeButton = ({recipeId}) => {

    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

    const handleDelete = () => {
        deleteRecipe(recipeId);
    };


return(
    <button onClick={handleDelete}>Delete recipe</button>
)

}

export default  DeleteRecipeButton ;