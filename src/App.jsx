import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Resister from "./components/Resister"
import Login from "./components/Login"





function App() {
  

  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Resister />} />
        <Route path='/login' element={<Login />} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
