import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Resister from "./components/Resister"
import Login from "./components/Login"
import Services from "./pages/services/Services"
import Features from "./pages/features/Features"
import Properties from "./pages/properties/Properties"
import PropertiesDetails from "./pages/properties/PropertiesDetails"
import AddProperty from "./pages/properties/AddProperty"
import Blog from "./pages/blogs/Blog"
import BlogDetails from "./pages/blogs/BlogDetails"
import Agent from "./pages/agent/Agent"
import AgentDetails from "./pages/agent/AgentDetails"
import Contract from "./pages/contract/Contract"






function App() {
  

  return (
   <>
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Resister />} />
        <Route path='/login' element={<Login />} />
        <Route path='/services' element={<Services />} />
        <Route path='/features' element={<Features />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/properties/:id' element={<PropertiesDetails />} />
        <Route path='/add-property' element={<AddProperty />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/blogs/:id' element={<BlogDetails/>} />
        <Route path='/agents' element={<Agent />} />
        <Route path='/agents/:id' element={<AgentDetails />} />
        <Route path='/contract' element={<Contract />} />
       </Routes>
    </BrowserRouter>
  
   </>
  )
}

export default App
