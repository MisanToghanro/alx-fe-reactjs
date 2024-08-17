import ProfilePage from "./components/ProfilePage.jsx";
import  userContext  from "./components/UserContext.js";

function App() {
    const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  
    return (
        <>
    <userContext.provider value={userData}/>
    <ProfilePage />
    <userContext.provider/>

        </>
);
  }
  
  export default App;
