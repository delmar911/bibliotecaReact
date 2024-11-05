import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Menu = () => {
  const { t } = useTranslation();

  return (
    <nav className="menu-nav">
      <NavLink
        className={({ isActive }) => 
          `menu-link ${isActive ? "active-link" : ""}`
        }
        to={"/"}
      >
        {t('navbar.home')}
      </NavLink>
     
      <NavLink
        className={({ isActive }) => 
          `menu-link ${isActive ? "active-link" : ""}`
        }
        to={"/products"}
      >
        {t('navbar.products')}
      </NavLink>
     
    </nav>
  );
};

export default Menu;
