import Navigation from '@/slices/Navigation';
import { Logo } from '@app/components/Logo/Logo';
import { LanguageSwitcher } from '@app/components/LanguageSwitcher';

const Header = ({ navigationSlice, locales, lang }) => (
  <>
    <header className="w-full sticky top-0 z-50 bg-white shadow-xl">
      <div className="mx-auto max-w-screen-2xl  px-4 py-2 ">
        <div className="w-full">
          <Navigation slice={navigationSlice} locales={locales} lang={lang} />
        </div>
        <div className="flex justify-end ">
          <div className="w-full lg:hidden">
            <LanguageSwitcher locales={locales} lang={lang} />
          </div>
        </div>
      </div>
    </header>
  </>
);

export default Header;
