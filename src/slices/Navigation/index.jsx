import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import NavBar from '@app/components/NavBar';

/**
 * Component for "Navigation" Slices.
 */
const Navigation = ({ slice, locales, lang }) => {
  return <NavBar navItems={slice.items} locales={locales} lang={lang} />;
};

export default Navigation;
