import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useDispatch } from 'react-redux';
import { setLanguage } from './redux/languageSlice';

const languages = [
  { code: 'English', name: 'English', flag: '🇬🇧' },
  { code: 'French', name: 'French', flag: '🇫🇷' },
  { code: 'Swahili', name: 'Swahili', flag: '🇹🇿' },
  { code: 'Arabic', name: 'Arabic', flag: '🇸🇦' },
  { code: 'Turkish', name: 'Turkish', flag: '🇹🇷' },
  { code: 'Kirundi', name: 'Kirundi', flag: '🇧🇮' }
];

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const handleLanguageChange = (code: string, name: string) => {
    dispatch(setLanguage(name));
    localStorage.setItem('selectedLanguage', name);

    i18n.changeLanguage(code).then(() => {
      console.log(`Language changed to: ${i18n.language}`);
    }).catch((err) => {
      console.error(`Failed to change language: ${err}`);
    });
  };

  return (
    <Menu as="div" className="relative inline-block text-left z-20">
      <div>
        <Menu.Button className=" font-slab inline-flex w-full justify-center rounded-md border border-gray-300 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          {t('selectLanguage', 'Select Language')}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="p-1">
          {languages.map(({ code, name, flag }) => (
            <Menu.Item key={code}>
              {({ active }) => (
                <button
                  onClick={() => handleLanguageChange(code, name)}
                  className={`group flex items-center rounded-md px-4 py-2 text-sm ${active ? 'bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-gray-200' : 'text-gray-700 dark:text-gray-400'}`}
                  aria-label={name}
                >
                  <span className="mr-2">{flag}</span>
                  <span>{name}</span>
                </button>
              )}
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  );
};

export default LanguageSwitcher;
