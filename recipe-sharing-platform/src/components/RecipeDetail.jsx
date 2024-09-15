import { useParams } from "react-router-dom";
import recipeData from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  console.log(id)
  const recipe = recipeData.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div className=" p-4 rounded-lg shadow-md shadow-blue-500 ">
      <h1 className="font-bold text-xl text-blue-500">{recipe.title}</h1>
      <h2 className="text-blue-500 font-semibold">Ingredients:</h2>
      <ul className="container bg-blue-500 rounded-md text-white p-4 ">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-blue-500 font-semibold">Cooking instructions:</h2>
      <p className="container bg-blue-500 rounded-md text-white p-4">{recipe.instructions}</p>
    </div>
  );
};
export default RecipeDetail;