import Navigation from '@/slices/Navigation';
import { Logo } from '@app/components/Logo/Logo';
import { LanguageSwitcher } from '@app/components/LanguageSwitcher';

const Header = ({ navigationSlice, locales, lang }) => (
  <>
    <header className="w-full sticky top-0 z-50 bg-white shadow-xl">
      <div className="mx-auto max-w-screen-2xl px-4 2xl:px-0 py-4 0">
        <div className="w-full">
          <Navigation slice={navigationSlice} />
        </div>

        <div className="flex justify-end ">
          <div className="w-full lg:w-auto">
            <LanguageSwitcher locales={locales} lang={lang} />
          </div>
        </div>
      </div>
    </header>
  </>
);

export default Header;
