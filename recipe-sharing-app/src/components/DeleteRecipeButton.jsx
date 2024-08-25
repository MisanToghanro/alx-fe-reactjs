import useRecipeStore from "./recipestore";

const DeleteRecipeButton = ({recipeId}) => {

    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

    const useNavigate = () => {
        deleteRecipe(recipeId);
    };


return(
    <button onClick={useNavigate}>Delete recipe</button>
)

}

export default  DeleteRecipeButton ;