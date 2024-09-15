
import { NavLink } from "react-router-dom";

const  Navbar = () => {

    return (
        <nav className="p-7 space-x-7 hover:text-blue-700 text-blue-500">
            <NavLink to = "/">Home</NavLink>
            <NavLink to= "/addrecipeForm">Add a recipe</NavLink>
        </nav>
    );
}
export default Navbar;