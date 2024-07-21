
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-700 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-100">© {currentYear} Développé par Ir Ally
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-100 sm:mt-0">
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">Evenements</a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">À propos de nous</a>
        </li>
        <li>
          <a href="#" className="hover:underline me-4 md:me-6">Notre Mission</a>
        </li>
        <li>
          <a href="#" className="hover:underline">Notre blog</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
