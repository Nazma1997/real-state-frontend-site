import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Resister from "./components/Resister"
import Login from "./components/Login"
import Services from "./pages/services/Services"
import Features from "./pages/features/Features"
import Properties from "./pages/properties/Properties"





function App() {
  

  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Resister />} />
        <Route path='/login' element={<Login />} />
        <Route path='/services' element={<Services />} />
        <Route path='/features' element={<Features />} />
        <Route path='/properties' element={<Properties />} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
