import { NavLink } from "react-router-dom";

const NavBar = () =>{
    return(
        <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">ProfilePage</NavLink>
        <NavLink to="/blogpost">BlogPosts</NavLink>
        </>
    )
}
export default NavBar