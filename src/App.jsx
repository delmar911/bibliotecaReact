
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import './App.css'
import {
 Inicio,
 Products
} from "./pages";
import Footer from "./components/Footer";
function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/products" element={<Products />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
