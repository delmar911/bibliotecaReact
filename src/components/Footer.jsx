import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Sección de enlaces */}
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Enlaces rápidos</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Inicio</a></li>
            <li><a href="#" className="hover:underline">Servicios</a></li>
            <li><a href="#" className="hover:underline">Sobre nosotros</a></li>
            <li><a href="#" className="hover:underline">Contacto</a></li>
          </ul>
        </div>

        {/* Sección de redes sociales */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="text-white hover:text-blue-500">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="#" className="text-white hover:text-blue-400">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="#" className="text-white hover:text-pink-500">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>

        {/* Derechos de autor */}
        <div className="text-center md:text-right">
          <p className="text-sm">&copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
