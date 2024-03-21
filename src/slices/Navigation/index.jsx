import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import NavBar from '@app/components/NavBar';

/**
 * Component for "Navigation" Slices.
 */
const Navigation = ({ slice }) => {
  return <NavBar navItems={slice.items} />;
};

export default Navigation;
