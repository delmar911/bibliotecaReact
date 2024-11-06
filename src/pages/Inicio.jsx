import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hombre from "../assets/img/hombre.jpg";

export const Inicio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
    });
  }, []);

  return (
    <main>
      <div
        className="bg-[#748CAB] m-8 rounded-2xl"
        data-aos="fade-up" 
      >
        <img
          src={hombre}
          alt="Imagen de hombre"
          className="rounded-2xl w-1/2"
          data-aos="zoom-in" 
          data-aos-delay="200" 
        />
      </div>
    </main>
  );
};

export default Inicio;
