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
}: ImageWithTextProps): JSX.Element => (
  <Slice>
    <div className="m-auto max-w-screen-xl lg:grid grid-cols-2 gap-8">
      <div
        className={`w-full my-auto ${
          alignment === 'Image right' ? 'lg:order-last' : ''
        }`}
      >
        <PrismicNextImage
          className="w-full rounded-lg shadow-lg aspect-video  lg:aspect-[4/3] object-cover object-center mb-6 lg:mb-0"
          field={image}
        />
      </div>
      <div className="m-auto">
        <PrismicRichText field={text} components={components} />
      </div>
    </div>
  </Slice>
);

export default ImageWithText;
