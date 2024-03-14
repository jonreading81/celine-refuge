'use client';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import { Card } from '@material-tailwind/react';

import { components } from '@app/utils/richTextComponents';
import { Slice } from '@app/components/Slice';

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
    <Slice>
      <div className="lg:grid grid-cols-2 gap-8">
        <PrismicNextImage
          className={`rounded-lg shadow-lg lg:aspect-[4/3] object-cover object-center mb-4 lg:mb-0 ${
            alignment === 'Image right' ? 'lg:order-last' : ''
          }`}
          field={image}
        />
        <div>
          <PrismicRichText field={text} components={components} />
        </div>
      </div>
    </Slice>
  );
};

export default ImageWithText;
