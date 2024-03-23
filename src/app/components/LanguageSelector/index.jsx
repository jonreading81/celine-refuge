'use client ';

import React, { useEffect, useState } from 'react';
import { useLocale } from '@app/hooks/useLocale';
import { useRouter } from 'next/navigation';

const LANGUAGE_SELECTOR_ID = 'language-selector';

const localeFlags = {
  'en-gb': 'gb  ',
  'fr-fr': 'fr',
};

const FlagIcon = ({ countryCode = '' }) => (
  <span
    className={`w-9 h-5 block bg-contain bg-no-repeat    fi-${localeFlags[countryCode]}`}
  />
);

export const LanguageSelector = () => {
  const router = useRouter();
  const { locales, lang } = useLocale();
  const selectedLanguage = locales.find((locale) => (locale.lang = lang));
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = async (language) => {
    router.push(language.url);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleWindowClick = (event) => {
      const target = event.target.closest('button');
      if (target && target.id === LANGUAGE_SELECTOR_ID) {
        return;
      }
      setIsOpen(false);
    };
    window.addEventListener('click', handleWindowClick);

    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  if (!selectedLanguage) {
    return null;
  }

  return (
    <>
      <div className="w-full flex items-center z-40">
        <div className="relative w-full text-left">
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              id={LANGUAGE_SELECTOR_ID}
              aria-haspopup="true"
              aria-expanded={isOpen}
            >
              <FlagIcon countryCode={selectedLanguage.lang} />
              <span className="flex-1 text-left">
                {selectedLanguage.lang_name}
              </span>
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {isOpen && (
            <div
              className="w-full origin-top-right absolute right-0 mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="language-selector"
            >
              <div className="w-full py-1 grid grid-cols-1" role="none">
                {locales.map((language, index) => (
                  <button
                    key={language.lang}
                    onClick={() => handleLanguageChange(language)}
                    className={`${
                      selectedLanguage.lang === language.lang
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-700'
                    } block px-4 py-2 text-sm text-left items-center inline-flex hover:bg-gray-100`}
                    role="menuitem"
                  >
                    <FlagIcon countryCode={language.lang} />
                    <span className="truncate">{language.lang_name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
