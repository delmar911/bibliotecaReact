import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutUs from "../assets/img/aboutus.jpg"

import imgReplace from "../assets/img/Image-folder.jpg";

export const SobreNosotros = () => {
  useEffect(() => {
    
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
    });
  }, []);

  return (
    <div className="container mx-auto p-8">
      <div className="text-center mb-8">
        <h2
          data-aos="fade-up" 
          className="text-3xl font-bold text-slate-50"
        >
          Sobre Nosotros
        </h2>
        <p
          data-aos="fade-up" 
          data-aos-delay="200" 
          className="text-lg text-slate-100 mt-2"
        >
          Conoce más sobre nuestra tienda y lo que ofrecemos.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
          <img
            data-aos="zoom-in" // Animación de zoom
            src={aboutUs}
            alt="Tienda"
            className="rounded-lg shadow-lg w-96 h-auto"
          />
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <p
            data-aos="fade-left" 
            className="text-xl text-slate-950"
          >
            Somos una tienda especializada en moda y estilo de vida, con una
            cuidadosa selección de ropa, calzado, bolsos y accesorios que
            combinan el estilo contemporáneo y la elegancia clásica.
          </p>
          <p
            data-aos="fade-left" 
            data-aos-delay="200" 
            className="text-xl text-slate-950"
          >
            Además, ofrecemos una amplia variedad de productos, desde
            electrónica y artículos para el hogar hasta bicicletas y productos
            de cuidado personal. Nuestro objetivo es brindar una colección
            versátil que permita a cada cliente expresar su personalidad y
            satisfacer todas sus necesidades diarias en un solo lugar.
          </p>
        </div>
      </div>
    </div>
  );
};
