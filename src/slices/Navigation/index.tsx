import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import Navbar from '@app/components/Navbar';

/**
 * Props for `Navigation`.
 */
export type NavigationProps = SliceComponentProps<Content.NavigationSlice>;

/**
 * Component for "Navigation" Slices.
 */
const Navigation = ({ slice }: NavigationProps): JSX.Element => {
  return <Navbar navItems={slice.items} />;
};

export default Navigation;
