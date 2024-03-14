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
      <div className=" rounded-xl shadow-lg overflow-hidden">
        <Carousel
          className="aspect-video "
          loop
          placeholder={primary.placeholder}
        >
          {items.map(({ image }, i) => (
            <PrismicNextImage
              key={i}
              field={image}
              className="h-full w-full object-cover object-center"
            />
          ))}
        </Carousel>
        <Caption>{primary.description}</Caption>
      </div>
    </Slice>
  );
};

export default GalleryCarousel;
