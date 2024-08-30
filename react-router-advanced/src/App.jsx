import Profile from "./components/Profile";
import { BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Home from "./components/Home"
import NavBar from "./components/NavBar";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./components/Login";


function App() {
 

  return (
   
   <Router>
   <NavBar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="login" element={<LoginPage/>}/>

    <Route element= {<ProtectedRoute/>}>
    <Route path="profile" element={<Profile/>}>
    <Route path="profileDetails" element={<ProfileDetails/>}/>
    <Route path="profileSettings" element={<ProfileSettings/>}/>
    </Route>

    {/*<Route path="/blogpost" element={<BlogPost />} /> */}
    <Route path="/blog/:id" element={<BlogPost />} />

    </Route>
    </Routes>
    </Router>
   
  )
}

export default App
