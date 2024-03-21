import { Content } from '@prismicio/client';

import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { Slice } from '@app/components/Slice';

import { components as richTextComponents } from '@app/utils/richTextComponents';

const components = {
  ...richTextComponents,
  heading4: ({ children }) => (
    <h2 className="text-4xl font-bold mb-6">{children}</h2>
  ),
  heading2: ({ children }) => (
    <h2 className="text-3xl font-bold mb-6">{children}</h2>
  ),
  heading3: ({ children }) => (
    <h3 className="text-2xl  font-bold mb-6">{children}</h3>
  ),
};

const ColoredTextBlock = ({
  slice: {
    primary: { text },
  },
}) => {
  return (
    <Slice>
      <section
        className={`bg-site-blue rounded-xl shadow-xl p-12 m-auto max-w-screen-lg bg-blue-site text-white flex justify-center items-center`}
      >
        <div className="w-full max-w-prose">
          <PrismicRichText field={text} components={components} />
        </div>
      </section>
    </Slice>
  );
};

export default ColoredTextBlock;
