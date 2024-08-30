import Profile from "./components/Profile";
import { Routes , Route} from "react-router-dom";
import Home from "./components/Home"
import NavBar from "./components/NavBar";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProctectedRoute";
import LoginPage from "./components/Login";


function App() {
 

  return (
    <>
   
   <NavBar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="login" element={<LoginPage/>}/>

    <Route element= {<ProtectedRoute/>}>
    <Route path="profile" element={<Profile/>}>
    <Route path="profileDetails" element={<ProfileDetails/>}/>
    <Route path="profileSettings" element={<ProfileSettings/>}/>
    </Route>
    <Route path="/blog/:postId" element={<BlogPost/>} />

    </Route>
    </Routes>
   
    </>
  )
}

export default App
