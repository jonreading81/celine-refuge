import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

/**
 * Props for `ImageBlock`.
 */
export type ImageBlockProps = SliceComponentProps<Content.ImageBlockSlice>;

/**
 * Component for "ImageBlock" Slices.
 */
const ImageBlock = ({ slice: { primary } }: ImageBlockProps): JSX.Element => {
  console.log(primary);
  return (
    <section className="flex justify-center items-center mb-8">
      <div className="w-full max-w-[740px]">
        <PrismicNextImage
          field={primary.image}
          className="object-cover w-full max-w-[740px]"
        />
        <p className="text-sm bg-gray-100 p-6">{primary.description}</p>
      </div>
    </section>
  );
};

export default ImageBlock;
