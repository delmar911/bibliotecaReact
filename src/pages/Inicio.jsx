import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hombre from "../assets/img/hombre.jpg";
import Testimonial from "../components/Testimonial/Testimonial";

export const Inicio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <main>
      <div className="bg-[#748CAB] m-8 rounded-2xl flex flex-col md:flex-row" data-aos="fade-up">
        <div className="md:w-1/2 rounded-2xl">
          <img
            src={hombre}
            alt="Imagen de hombre"
            className="w-full h-auto rounded-2xl"
            data-aos="zoom-in"
            data-aos-delay="200"
          />
        </div>
        <div className="flex items-center justify-center p-6 text-center md:w-1/2">
          <p className="max-w-lg text-lg font-bold text-black">
            Somos una tienda especializada en moda y estilo de vida, con una
            cuidadosa selección de ropa, calzado, bolsos y accesorios que
            combinan el estilo contemporáneo y la elegancia clásica. Además,
            ofrecemos una amplia variedad de productos, desde electrónica y
            artículos para el hogar hasta bicicletas y productos de cuidado
            personal. Nuestro objetivo es brindar una colección versátil que
            permita a cada cliente expresar su personalidad y satisfacer todas
            sus necesidades diarias en un solo lugar.
          </p>
        </div>
      </div>
    <Testimonial/>
    </main>
  );
};

export default Inicio;
