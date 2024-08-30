

import { NavLink , Outlet} from 'react-router-dom';

 const Profile = () => {

return(
    <>
    <h1>Profile Page</h1>
    <nav>
    <NavLink to="ProfileDetails">Profile Details</NavLink>
    <NavLink to="ProfileSettings">Profile Settings</NavLink>
    </nav>
<Outlet/>
    </>
)
}

export default Profile