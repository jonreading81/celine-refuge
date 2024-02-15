import Navigation from '@/slices/Navigation';
import { Logo } from '@app/components/Logo/Logo';

type Props = { navigationSlice: { items: [] } };

const Header = ({ navigationSlice }: Props) => (
  <>
    <header className="w-full">
      <Navigation slice={navigationSlice} />
    </header>
  </>
);

export default Header;
