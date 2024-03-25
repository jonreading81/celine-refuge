'use client';

import { LanguageSelector } from '@app/components/LanguageSelector';
import LocaleContext from '@app/context/LocaleContext';

export const LanguageSelectorWithContext = ({ locales, lang }) => (
  <LocaleContext.Provider value={{ locales, lang }}>
    <div className="max-w-screen-2xl mx-auto relative">
      <div className="lg:w-[180px] lg:absolute relative  top-1 right-0 z-40 mx-4 mt-4 ">
        <LanguageSelector />
      </div>
    </div>
  </LocaleContext.Provider>
);
