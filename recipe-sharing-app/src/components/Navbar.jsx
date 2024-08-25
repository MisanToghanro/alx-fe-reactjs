import {NavLink} from "react-router-dom"

export const Navbar = () => {

    return (
    <nav>
        <NavLink to= "/">RecipeList</NavLink>

        <NavLink to ="/add-recipe-form">Add recipe</NavLink>
    </nav>
    )


}