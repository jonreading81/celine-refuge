import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import NavBar from '@app/components/NavBar';

/**
 * Props for `Navigation`.
 */
export type NavigationProps = SliceComponentProps<Content.NavigationSlice>;

/**
 * Component for "Navigation" Slices.
 */
const Navigation = ({ slice }: NavigationProps): JSX.Element => {
  return <NavBar navItems={slice.items} />;
};

export default Navigation;
