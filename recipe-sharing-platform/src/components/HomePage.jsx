import { useEffect, useState } from "react";
import recipeData from "../data.json";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(recipeData);
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6 mt-6 text-blue-500 underline">
                Recipe Sharing Platform
            </h1>

            <div className="grid-cols-2 sm:grid-cols-1 md:grid-cols-3 gap-6">
                {recipes.map((recipe) => (
                    <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
                        <div className="rounded-lg p-4 shadow-md hover:shadow-blue-500 mb-4 transition-transform hover:scale-105 cursor-pointer">
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                className="w-full h-40 object-cover rounded-t-lg"
                            />
                            <div className="p-4">
                                <h1 className="text-2xl font-semibold mb-2 text-blue-500">
                                    {recipe.title}
                                </h1>
                                <p className="text-gray-500">{recipe.summary}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HomePage;