import logoBlack from "./assets/img/logoBlack.svg";
import Buscador from "./components/Buscador";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import './App.css'
import {
 Inicio
} from "./pages";
function App() {


  return (
    <>
      <BrowserRouter>
          
        <Buscador />
        <img src={logoBlack} alt="" />
        <Menu />
        <Routes>
          <Route path="/" element={<Inicio />} />
         
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
