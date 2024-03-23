'use client';

import Navigation from '@/slices/Navigation';
import { Logo } from '@app/components/Logo/Logo';
import { LanguageSelector } from '@app/components/LanguageSelector';
import LocaleContext from '@app/context/LocaleContext';

const Header = ({ navigationSlice, locales, lang }) => (
  <LocaleContext.Provider value={{ locales, lang }}>
    <header className="w-full sticky top-0 z-50 bg-white shadow-xl">
      <div className="mx-auto max-w-screen-2xl  px-4 pt-2 pb-4 lg:py-6 ">
        <div className="w-full">
          <Navigation slice={navigationSlice} locales={locales} lang={lang} />
        </div>
        <div className="flex justify-end ">
          <div className="w-full lg:hidden">
            <LanguageSelector locales={locales} lang={lang} />
          </div>
        </div>
      </div>
    </header>
  </LocaleContext.Provider>
);

export default Header;
