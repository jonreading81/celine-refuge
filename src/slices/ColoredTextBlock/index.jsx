import { Content } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { Slice } from '@app/components/Slice';
import * as richTextComponents from '@app/utils/richTextComponents';

const components = {
  ...richTextComponents.components,
  hyperlink: ({ node, children }) => (
    <PrismicNextLink className="btn-colored-bg block" field={node.data}>
      {children}
    </PrismicNextLink>
  ),
};

const COLORS = {
  blue: 'bg-blue-site',
  purple: 'bg-purple-site',
  red: 'bg-red-400',
};

const SIZES = {
  XLarge: 'max-w-screen-xl',
  Large: 'max-w-screen-lg',
  Medium: 'max-w-screen-md',
};

const ColoredTextBlock = ({
  slice: {
    primary: { text, color, size },
  },
}) => (
  <Slice>
    <section
      className={`${COLORS[color] ?? COLORS.blue} ${
        SIZES[size] ?? SIZES.Large
      } overflow-hidden rounded-xl shadow-xl text-white p-12 m-auto flex justify-center items-center`}
    >
      <div className="w-full max-w-prose">
        <PrismicRichText field={text} components={components} />
      </div>
    </section>
  </Slice>
);

export default ColoredTextBlock;
