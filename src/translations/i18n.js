import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import globalEs from '../translations/es/global.json';
import globalEn from '../translations/en/global.json'; // Si tienes más idiomas

i18n
  .use(initReactI18next) // Conectar con react-i18next
  .init({
    fallbackLng: 'es', // Idioma por defecto
    lng: 'es', // Idioma inicial
    resources: {
      es: {
        global: globalEs, // Namespace global en español
      },
      en: {
        global: globalEn, // Namespace global en inglés (si lo tienes)
      },
    },
    ns: ['global'], // Namespace a utilizar
    defaultNS: 'global', // Namespace por defecto
    interpolation: {
      escapeValue: false, // React ya hace la sanitización de los valores
    },
  });

export default i18n;
