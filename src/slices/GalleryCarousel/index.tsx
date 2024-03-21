import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import Carousel from '@app/components/Carousel';
import Caption from '@app/components/Caption';
import { PrismicNextImage } from '@prismicio/next';

import { Slice } from '@app/components/Slice';

/**
 * Props for `GalleryCarousel`.
 */
export type GalleryCarouselProps =
  SliceComponentProps<Content.GalleryCarouselSlice>;

/**
 * Component for "GalleryCarousel" Slices.
 */
const GalleryCarousel = ({
  slice: { primary, items },
}: GalleryCarouselProps): JSX.Element => {
  return (
    <Slice>
      <div className="bg-blue-site max-w-screen-lg m-auto rounded-xl shadow-xl overflow-hidden">
        <Carousel loop placeholder={primary.placeholder}>
          {items.map(({ image }, i) => (
            <div key={i} className="h-full">
              <PrismicNextImage
                field={image}
                className=" w-full aspect-video  object-cover object-center"
              />
              <Caption>{image.alt}</Caption>
            </div>
          ))}
        </Carousel>
      </div>
    </Slice>
  );
};

export default GalleryCarousel;
