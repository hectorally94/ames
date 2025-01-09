import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-700 dark:border-gray-600">
      <span className=" font-slab text-sm text-gray-500 sm:text-center dark:text-gray-100">
        © {currentYear} {t('developed By')} AMUES
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-100 sm:mt-0">
        <li className="mr-4">
          <Link
            to="/"
            className="hover:underline dark:hover:text-gray-300  font-slab"
          >
            {t('menu.home')}
          </Link>
        </li>
        <li className="mr-4">
          <Link
            to="/mganga"
            className="hover:underline dark:hover:text-gray-300 font-slab"
          >
            {t('menu.doctor')}
          </Link>
        </li>
        <li className="mr-4">
          <Link
      to="/actions"
      className="hover:underline dark:hover:text-gray-300 font-slab"
          >
      {t('menu.actions')}
      </Link>
        </li>
        <li className="mr-4">
          <Link
      to="/events"
      className="hover:underline dark:hover:text-gray-300 font-slab"
          >
      {t('menu.events')}
      </Link>
        </li>
        
        <li className="mr-4">
          <Link
            to="/contact"
            className="hover:underline dark:hover:text-gray-300 font-slab"
          >
            {t('menu.contact')}
          </Link>
        </li>
        
        <li className="mr-4">
          <Link
            to="/blog"
            className="hover:underline dark:hover:text-gray-300 font-slab"
          >
            {t('menu.blog')}
          </Link>
        </li> 
        
      </ul>
    </footer>
  );
}
