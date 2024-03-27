'use client';

import Navigation from '@/slices/Navigation';
import { Logo } from '@app/components/Logo/Logo';
import LocaleContext from '@app/context/LocaleContext';

const Header = ({ navigationSlice, locales, lang }) => (
  <LocaleContext.Provider value={{ locales, lang }}>
    <header className="w-full sticky top-0 z-50 bg-white shadow-xl">
      <div className="mx-auto max-w-screen-2xl  px-4 py-2">
        <div className="w-full">
          <Navigation slice={navigationSlice} />
        </div>
      </div>
    </header>
  </LocaleContext.Provider>
);

export default Header;
