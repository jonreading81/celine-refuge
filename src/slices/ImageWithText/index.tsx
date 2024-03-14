'use client';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

import { components } from '@app/utils/richTextComponents';

/**
 * Props for `ImageWithText`.
 */
export type ImageWithTextProps =
  SliceComponentProps<Content.ImageWithTextSlice>;

/**
 * Component for "ImageWithText" Slices.
 */
const ImageWithText = ({
  slice: {
    primary: { image, text, alignment },
  },
}: ImageWithTextProps): JSX.Element => {
  return (
    <section className="lg:grid grid-cols-2 gap-8 mb-12">
      <PrismicNextImage
        className={`lg:aspect-[4/3] object-cover object-center mb-8 lg:mb-0 ${
          alignment === 'Image right' ? 'lg:order-last' : ''
        }`}
        field={image}
      />
      <div>
        <PrismicRichText field={text} components={components} />
      </div>
    </section>
  );
};

export default ImageWithText;
