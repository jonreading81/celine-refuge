import { Content } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { Slice } from '@app/components/Slice';
import * as richTextComponents from '@app/utils/richTextComponents';

const components = {
  ...richTextComponents.components,
  hyperlink: ({ node, children }) => (
    <PrismicNextLink className="btn-inverse inline-block" field={node.data}>
      {children}
    </PrismicNextLink>
  ),
};

const ColoredTextBlock = ({
  slice: {
    primary: { text },
  },
}) => (
  <Slice>
    <section
      className={`bg-site-blue overflow-hidden rounded-xl shadow-xl p-12 m-auto max-w-screen-lg bg-blue-site text-white flex justify-center items-center`}
    >
      <div className="w-full max-w-prose">
        <PrismicRichText field={text} components={components} />
      </div>
    </section>
  </Slice>
);

export default ColoredTextBlock;
