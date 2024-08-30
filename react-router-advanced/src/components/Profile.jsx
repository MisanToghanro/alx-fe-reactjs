
import { Routes, Route } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';
import { NavLink , Outlet} from 'react-router-dom';

 const Profile = () => {

return(
    <>
    <h1>Profile Page</h1>
    <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
   {/* <nav>
    <NavLink to="ProfileDetails">Profile Details</NavLink>
    <NavLink to="ProfileSettings">Profile Settings</NavLink>
    </nav>
<Outlet/>*/}
    </>
)
}

export default Profile