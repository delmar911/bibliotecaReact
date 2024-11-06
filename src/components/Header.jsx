import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import logoBlanco from "../assets/img/logoBlanco.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header = () => {
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm, handleSearch } = useSearch();
  const { getCartItemsCount } = useCart();
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    handleSearch();
    navigate("/productos");
  };

  const handleCartClick = () => {
    navigate("/carrito");
  };

  return (
    <header className="bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logoBlanco}
              alt="Logo"
              className="h-24 w-auto cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>

          {/* Botón de menú hamburguesa */}
          <button
            className="text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Menú de navegación */}
          <nav
            className={`menu-nav md:flex md:flex-row md:space-x-4 text-white p-2 absolute top-full left-0 right-0 bg-gray-900 md:static md:bg-transparent transition-transform duration-300 ease-in-out ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <NavLink
              className={({ isActive }) =>
                `menu-link block md:inline-block ${
                  isActive ? "active-link" : ""
                }`
              }
              to={"/"}
              onClick={() => setMenuOpen(false)}
            >
              {t("navbar.home")}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `menu-link block md:inline-block ${
                  isActive ? "active-link" : ""
                }`
              }
              to={"/productos"}
              onClick={() => setMenuOpen(false)}
            >
              {t("navbar.products")}
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `menu-link block md:inline-block ${
                  isActive ? "active-link" : ""
                }`
              }
              to={"/SobreNosotros"}
              onClick={() => setMenuOpen(false)}
            >
              {t("navbar.sobrenosotros")}
            </NavLink>
          </nav>

          {/* Buscador y carrito */}
          <div className="flex-1 max-w-2xl mx-8">
            <form onSubmit={onSubmit} className="relative">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>

          {/* Carrito */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleCartClick}
              className="relative p-2 text-white hover:text-gray-200 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {getCartItemsCount() > 0 && (
                <div className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
