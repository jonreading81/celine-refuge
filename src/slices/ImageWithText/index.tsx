import { Content } from '@prismicio/client';
import { SliceComponentProps, PrismicRichText } from '@prismicio/react';

import { PrismicNextImage } from '@prismicio/next';

/**
 * Props for `ImageWithText`.
 */
export type ImageWithTextProps =
  SliceComponentProps<Content.ImageWithTextSlice>;

/**
 * Component for "ImageWithText" Slices.
 */
const ImageWithText = ({ slice }: ImageWithTextProps): JSX.Element => {
  return (
    <section>
      <h2>{slice.primary.title}</h2>
      {slice.items.map((item) => (
        <>
          <PrismicNextImage field={item.image} />
          <PrismicRichText field={item.text} />
        </>
      ))}
    </section>
  );
};

export default ImageWithText;
