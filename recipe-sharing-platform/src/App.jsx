import AddRecipeForm from "./components/AddRecipeForm";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
function App() {
  

  return (
  
    <>
    <Navbar/>
    <Routes>
<Route path="/" element={<HomePage/>}/>
<Route path="/recipe/:id" element={<RecipeDetail/>}/>
<Route path="/addrecipeForm" element={<AddRecipeForm/>}/>
     </Routes>
    </>

    
 
  )
}

export default App
