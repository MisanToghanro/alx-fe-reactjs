
import { NavLink } from "react-router-dom";

export const Navbar = () => {

    return(
        <nav style={{backgroundColor:"GrayText" , display:"flex" , justifyContent:"center"}}>
            <NavLink to = '/'>Home</NavLink>
            <NavLink to = '/about'>About</NavLink>
            <NavLink to = '/service'>Service</NavLink>
            <NavLink to = '/contact'>Contact</NavLink>
        </nav>
    )
}