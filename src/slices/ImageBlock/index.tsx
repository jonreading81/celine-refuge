import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import Caption from '@app/components/Caption';
import { Slice } from '@app/components/Slice';

/**
 * Props for `ImageBlock`.
 */
export type ImageBlockProps = SliceComponentProps<Content.ImageBlockSlice>;

/**
 * Component for "ImageBlock" Slices.
 */
const ImageBlock = ({ slice: { primary } }: ImageBlockProps): JSX.Element => {
  return (
    <Slice>
      <div className="flex justify-center items-center ">
        <div className="w-full  rounded-xl shadow-lg overflow-hidden">
          <PrismicNextImage
            field={primary.image}
            className="object-cover w-full w-full"
          />
          {primary.description && <Caption>{primary.description}</Caption>}
        </div>
      </div>
    </Slice>
  );
};

export default ImageBlock;
