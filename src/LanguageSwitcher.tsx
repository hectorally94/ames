import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'French', flag: '🇫🇷' },
    { code: 'sw', name: 'Swahili', flag: '🇹🇿' },  
    { code: 'ar', name: 'Arabic', flag: '🇸🇦' },
    { code: 'tr', name: 'Turkish', flag: '🇹🇷' },
    { code: 'rn', name: 'Kirundi', flag: '🇧🇮' } 
  ];
  
const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const handleLanguageChange = (code: string) => {
    console.log(`Changing language to: ${code}`);
    i18n.changeLanguage(code).then(() => {
      console.log(`Language changed to: ${i18n.language}`);
    }).catch((err) => {
      console.error(`Failed to change language: ${err}`);
    });
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white dark:bg-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          {t("selectLanguage")}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="p-1">
          {languages.map(({ code, name, flag }) => (
            <Menu.Item key={code}>
              {({ active }) => (
                <button
                  onClick={() => handleLanguageChange(code)}
                  className={`group flex items-center rounded-md px-4 py-2 text-sm ${active ? 'bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-gray-200' : 'text-gray-700 dark:text-gray-400'}`}
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
