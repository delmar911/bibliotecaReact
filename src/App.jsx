import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import './App.css';
import { Inicio, Products, SobreNosotros, ProductosDetalle, Cart  } from "./pages";
import Footer from "./components/Footer";
import { SearchProvider } from './context/SearchContext';
import {CartProvider} from './context/CartContext';
import { Toaster } from 'react-hot-toast';
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <>
     <CartProvider>
        <SearchProvider>
          <BrowserRouter>
          <Toaster />
            <Header />
            <Menu />
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/productos" element={<Products />} />
              <Route path="/productos/:id" element={<ProductosDetalle />} />
              <Route path="/SobreNosotros" element={<SobreNosotros />} />
              <Route path="/carrito" element={<Cart />} /> {/* Nueva ruta para el carrito */}
            </Routes>
            <Testimonial/>
            <Footer />
          </BrowserRouter>
        </SearchProvider>
      </CartProvider>
      
    </>
  );
}

export default App;