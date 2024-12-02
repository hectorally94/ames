import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react';
import {
  ArrowRightEndOnRectangleIcon,
  Bars3Icon,
  EnvelopeIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
 
 import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../LanguageSwitcher';
import Base64ImageIcon from '../../common/Base64ImageIcon';
import { Info, useGetAllInfoQuery } from '../../redux/api/infoApiSlice';
interface InfoResponse {
  message: string;
  data: Info[];
} 
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [ , setActiveNav] = useState('/'); // Default to home
  const { t } = useTranslation();
   const { data } = useGetAllInfoQuery();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > prevScrollPos) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);
  const packageData = (data as unknown as InfoResponse)?.data || [];

  return (
    <header
      className={`bg-white dark:bg-gray-700 fixed top-0 left-0 w-full shadow-lg transition-all duration-300 z-50 ${
        scrollDirection === 'down' ? 'transform -translate-y-full' : 'translate-y-0'
      }`}
    >
      {/* Top section with contact info and buttons */}
      <div className="bg-gray-100 dark:bg-gray-300 py-2">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6">
        {packageData.map((packageItem, index) => (
          <div key={index} className="flex items-center space-x-4 text-sm font-slab text-gray-600">
            <span className="flex items-center">
            <EnvelopeIcon className="h-5 w-5 text-gray-500 dark:text-gray-100 mr-1" />
            {packageItem.infoType}
            </span>
          
          </div>
            ))} 
          
          <div className="flex space-x-4">
            <Link
              to="/volunteer"
              className="font-slab flex items-center text-sm font-semibold text-gray-900 hover:text-indigo-600 dark:hover:text-gray-500"
              onClick={() => setActiveNav('/volunteer')}
            >
              <ArrowRightEndOnRectangleIcon className="h-5 w-5 text-gray-500 mr-1" />
              {t('menu.volunteer')}
            </Link>
            <Link
              to="/donate"
              className="font-slab bg-yellow-500 text-sm text-blue-900 px-2 py-2 rounded-lg font-semibold hover:bg-yellow-400"
              onClick={() => setActiveNav('/donate')}
            >
              {t('menu.donate')}
            </Link>
          </div>
        </div>
      </div>

      {/* Navbar */}
    {/* Navbar */}
<nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
  <div className="flex lg:flex-1">
    <NavLink
      to="/"
      className={({ isActive }) =>
        `-m-1.5 p-1.5 ${isActive ? 'text-green-500' : 'text-gray-900'} dark:text-white`
      }
    >   <span className="sr-only">Your Company</span>
<Base64ImageIcon className="h-10 w-10" />
   </NavLink>
  </div>
  <div className="flex lg:hidden">
    <button
      type="button"
      onClick={() => setMobileMenuOpen(true)}
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300"
    >
      <span className="sr-only">Open main menu</span>
      <Bars3Icon aria-hidden="true" className="h-6 w-6" />
    </button>
  </div>
  <PopoverGroup className="hidden lg:flex lg:gap-x-12">
    <NavLink
      to="/"
      className={({ isActive }) =>
        `font-slab text-sm font-semibold leading-6 ${isActive ? 'text-green-500' : 'text-gray-900'} dark:text-white`
      }
    >
      {t('menu.home')}
    </NavLink>
    <NavLink
      to="/mganga"
      className={({ isActive }) =>
        `font-slab text-sm font-semibold leading-6 ${isActive ? 'text-green-500' : 'text-gray-900'} dark:text-white`
      }
    >
      {t('menu.doctor')}
    </NavLink>
    <NavLink
      to="/actions"
      className={({ isActive }) =>
        `text-sm font-slab font-semibold leading-6 ${isActive ? 'text-green-500' : 'text-gray-900'} dark:text-white`
      }
    >
      {t('menu.actions')}
    </NavLink>
    <NavLink
      to="/events"
      className={({ isActive }) =>
        `text-sm font-slab font-semibold leading-6 ${isActive ? 'text-green-500' : 'text-gray-900'} dark:text-white`
      }
    >
      {t('menu.events')}
    </NavLink>
    <NavLink
      to="/about"
      className={({ isActive }) =>
        `text-sm font-slab font-semibold leading-6 ${isActive ? 'text-green-500' : 'text-gray-900'} dark:text-white`
      }
    >
      {t('menu.about')}
    </NavLink>
    <NavLink
      to="/mission"
      className={({ isActive }) =>
        `text-sm font-slab font-semibold leading-6 ${isActive ? 'text-green-500' : 'text-gray-900'} dark:text-white`
      }
    >
      {t('menu.mission')}
    </NavLink>
    <NavLink
      to="/blog"
      className={({ isActive }) =>
        `text-sm font-slab font-semibold leading-6 ${isActive ? 'text-green-500' : 'text-gray-900'} dark:text-white`
      }
    >
      {t('menu.blog')}
    </NavLink>
    <NavLink
      to="/contact"
      className={({ isActive }) =>
        `text-sm font-slab font-semibold leading-6 ${isActive ? 'text-green-500' : 'text-gray-900'} dark:text-white`
      }
    >
      {t('menu.contact')}
    </NavLink>
    <LanguageSwitcher /> {/* Add the language switcher here */}
  </PopoverGroup>
</nav>



      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="wait" src="src/assets/amesWhite.ico" className="h-8 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${activeNav === '/' ? 'text-green-500' : 'text-gray-900'} hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                  onClick={() => {
                    setActiveNav('/');
                    setMobileMenuOpen(false);
                  }}
                >
                  {t('menu.home')}
                </Link>
                <Link
                  to="/actions"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${activeNav === '/actions' ? 'text-green-500' : 'text-gray-900'} hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                  onClick={() => {
                    setActiveNav('/actions');
                    setMobileMenuOpen(false);
                  }}
                >
                  {t('menu.actions')}
                </Link>
                <Link
                  to="/events"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${activeNav === '/events' ? 'text-green-500' : 'text-gray-900'} hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                  onClick={() => {
                    setActiveNav('/events');
                    setMobileMenuOpen(false);
                  }}
                >
                  {t('menu.events')}
                </Link>
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${activeNav === '/about' ? 'text-green-500' : 'text-gray-900'} hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                  onClick={() => {
                    setActiveNav('/about');
                    setMobileMenuOpen(false);
                  }}
                >
                  {t('menu.about')}
                </Link>
                <Link
                  to="/mission"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${activeNav === '/mission' ? 'text-green-500' : 'text-gray-900'} hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                  onClick={() => {
                    setActiveNav('/mission');
                    setMobileMenuOpen(false);
                  }}
                >
                  {t('menu.mission')}
                </Link>
                <Link
                  to="/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${activeNav === '/blog' ? 'text-green-500' : 'text-gray-900'} hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                  onClick={() => {
                    setActiveNav('/blog');
                    setMobileMenuOpen(false);
                  }}
                >
                  {t('menu.blog')}
                </Link>
                <Link
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold font-slab leading-7 ${activeNav === '/contact' ? 'text-green-500' : 'text-gray-900'} hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                  onClick={() => {
                    setActiveNav('/contact');
                    setMobileMenuOpen(false);
                  }}
                >
                  {t('menu.contact')}
                </Link>
              </div>
              <LanguageSwitcher /> {/* Add the language switcher here */}
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
