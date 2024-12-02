// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Load translations using HTTP
  .use(LanguageDetector) // Detect language from the browser
  .use(initReactI18next) // Pass the i18n instance to react-i18next
  .init({
    fallbackLng: 'English', // Fallback language if the detected language isn't available
    supportedLngs: ['English', 'French', 'Swahili', 'Arabic', 'Turkish', 'Kirundi'], // Supported languages
    debug: true, // Set to false in production
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to translation files
    },
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
