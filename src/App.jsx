import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Resister from "./components/Resister"
import Login from "./components/Login"
import Services from "./pages/services/Services"





function App() {
  

  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Resister />} />
        <Route path='/login' element={<Login />} />
        <Route path='/services' element={<Services />} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
