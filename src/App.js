import {BrowserRouter,Routes,Route} from "react-router-dom"
import Layout from "./Layout"
import Home from "./Home"
import About from "./About"
import Conatact from "./Conatact"
export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
       <Route path="conatact" element={<Conatact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}