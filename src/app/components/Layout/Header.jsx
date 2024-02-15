import Navigation from '@/slices/Navigation';
import { Logo } from '@app/components/Logo/Logo';

const Header = ({ navigationSlice }) => (
  <>
    <header className="w-full">
      <Navigation slice={navigationSlice} />
    </header>
  </>
);

export default Header;
