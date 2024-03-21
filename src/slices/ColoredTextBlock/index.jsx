import { Content } from '@prismicio/client';

import { PrismicRichText, SliceComponentProps } from '@prismicio/react';
import { Slice } from '@app/components/Slice';

import { components } from '@app/utils/richTextComponents';

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
