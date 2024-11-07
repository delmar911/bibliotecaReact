import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import logoBlanco from '../assets/img/logoBlanco.png'

const Footer = () => {
  return (
    <footer className="py-8 text-white bg-gray-900">
      <div className="container flex flex-col items-center justify-between px-4 mx-auto space-y-8 md:space-y-0 md:flex-row">
        {/* Sección de enlaces rápidos */}
        <div className="flex flex-col items-center md:items-start md:w-1/3">
          <h4 className="mb-2 text-lg font-semibold">Enlaces rápidos</h4>
          <ul className="space-y-1 text-center md:text-left">
            <li>
              <NavLink to="/" className="hover:text-gray-400">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/productos" className="hover:text-gray-400">
                Productos
              </NavLink>
            </li>
            <li>
              <NavLink to="/SobreNosotros" className="hover:text-gray-400">
                Sobre Nosotros
              </NavLink>
            </li>
            <li>
              <NavLink to="/carrito" className="hover:text-gray-400">
                Carrito
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Logo y derechos de autor */}
        <div className="flex flex-col items-center md:w-1/3">
          <img src={logoBlanco} alt="Logo de Online Shop MAC" className="w-24 h-auto mb-2" />
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} Online Shop MAC. Todos los derechos reservados.
          </p>
        </div>

        {/* Sección de redes sociales */}
        <div className="flex items-center space-x-6 md:w-1/3 justify-center md:justify-end">
          <a href="#" className="text-white transition duration-300 ease-in-out transform hover:text-blue-500 hover:scale-125">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="#" className="text-white transition duration-300 ease-in-out transform hover:text-blue-400 hover:scale-125">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="#" className="text-white transition duration-300 ease-in-out transform hover:text-pink-500 hover:scale-125">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;