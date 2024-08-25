import {useState} from "react";
import useRecipeStore from "../store/RecipeStore";

const EditRecipeForm = ({recipe}) =>{

    const updateRecipe = useRecipeStore(state => state.updateRecipe);
    const [title , setTitle] = useState(recipe.title);
    const [description , setDescription] = useState(recipe.description);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateRecipe({...recipe, title , description});
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
             type="text"
             value={title}
             onChange={(e) => setTitle(e.target.value)}
             placeholder="Edit dish title"
             />

             <textarea
             type="text"
             onChange={(e) => setDescription(e.target.value)}
             placeholder="Edit recipe ingredients"
              />

              <button type="submit"> save changes</button>

        </form>
    )
}

export default EditRecipeForm;

