import { NavbarDefault } from '@app/components/NavBar';
import { Logo } from '@app/components/Logo/Logo';
import testIds from '@app/utils/test-ids';

const Header = () => (
  <>
    <header className="w-full" data-testid={testIds.LAYOUT.HEADER}>
      <NavbarDefault />
    </header>
  </>
);

export default Header;
