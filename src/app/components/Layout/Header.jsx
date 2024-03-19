import Navigation from '@/slices/Navigation';
import { Logo } from '@app/components/Logo/Logo';
import { LanguageSwitcher } from '@app/components/LanguageSwitcher';

const Header = ({ navigationSlice, locales, lang }) => (
  <>
    <header className="w-full">
      <div className="mx-auto max-w-screen-2xl px-4 2xl:px-0 py-4 0">
        <Navigation slice={navigationSlice} />
        <div className="flex justify-end">
          <LanguageSwitcher locales={locales} lang={lang} />
        </div>
      </div>
    </header>
  </>
);

export default Header;
