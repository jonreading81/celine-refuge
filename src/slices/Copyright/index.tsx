import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Copyright`.
 */
export type CopyrightProps = SliceComponentProps<Content.CopyrightSlice>;

/**
 * Component for "Copyright" Slices.
 */
const Copyright = ({
  slice: {
    primary: { copyright_text },
  },
}: CopyrightProps): JSX.Element => {
  const year = new Date().getFullYear();

  return (
    <div className="mx-auto text-center sm:text-sm my-8">
      {year} {copyright_text}
    </div>
  );
};

export default Copyright;
