import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import Caption from '@app/components/Caption';

/**
 * Props for `ImageBlock`.
 */
export type ImageBlockProps = SliceComponentProps<Content.ImageBlockSlice>;

/**
 * Component for "ImageBlock" Slices.
 */
const ImageBlock = ({ slice: { primary } }: ImageBlockProps): JSX.Element => {
  return (
    <section className="flex justify-center items-center mb-12">
      <div className="w-full max-w-[740px] overflow-hidden">
        <PrismicNextImage
          field={primary.image}
          className="object-cover w-full max-w-[740px]"
        />
        <Caption>{primary.description}</Caption>
      </div>
    </section>
  );
};

export default ImageBlock;
