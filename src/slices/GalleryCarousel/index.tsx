import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import Carousel from '@app/components/Carousel';
import { PrismicNextImage } from '@prismicio/next';

/**
 * Props for `GalleryCarousel`.
 */
export type GalleryCarouselProps =
  SliceComponentProps<Content.GalleryCarouselSlice>;

/**
 * Component for "GalleryCarousel" Slices.
 */
const GalleryCarousel = ({ slice }: GalleryCarouselProps): JSX.Element => {
  return (
    <Carousel
      className="aspect-video rounded-xl mb-8"
      loop
      placeholder={slice.primary.placeholder}
    >
      {slice.items.map(({ image }, i) => (
        <PrismicNextImage
          key={i}
          field={image}
          className="h-full w-full object-cover object-center"
        />
      ))}
    </Carousel>
  );
};

export default GalleryCarousel;
