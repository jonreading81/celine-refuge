import { Content } from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';
import * as richTextComponents from '@app/utils/richTextComponents';
import { Slice } from '@app/components/Slice';
import { PrismicNextLink } from '@prismicio/next';

const components = {
  ...richTextComponents.components,
  paragraph: ({ children }) => <p className="mb-6 text-lg">{children}</p>,
};

/**
 * Component for "Announcement" Slices.
 */
const Announcement = ({
  slice: {
    primary: { text, title },
  },
}) => (
  <Slice>
    <section
      className={`shadow-xl bg-purple-site overflow-hidden rounded-xl  p-12 m-auto max-w-screen-lg text-white flex justify-center items-center`}
    >
      <div className="w-full max-w-screen-md">
        <h1 className="text-center mb-8">{title}</h1>
        {text && (
          <div className="m-auto max-w-prose">
            <PrismicRichText field={text} components={components} />
          </div>
        )}
      </div>
    </section>
  </Slice>
);

export default Announcement;
