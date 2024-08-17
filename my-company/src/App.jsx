
import { Routes , Route } from "react-router-dom"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Services from "./components/Services.jsx"
import Contact from "./components/Contact.jsx"
import { Navbar } from "./components/Navbar.jsx"



function App() {

  return (
    
   <>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="service" element={<Services/>}/>
    <Route path="contact" element={<Contact/>}/>
   </Routes>
   </>
   
  )
}

export default App
