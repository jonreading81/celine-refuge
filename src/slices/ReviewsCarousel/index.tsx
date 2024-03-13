'use client';

import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import Carousel from '@app/components/Carousel';

/**
 * Props for `ReviewsCarousel`.
 */
export type ReviewsCarouselProps =
  SliceComponentProps<Content.ReviewsCarouselSlice>;

/**
 * Component for "ReviewsCarousel" Slices.
 */
const ReviewsCarousel = ({ slice }: ReviewsCarouselProps): JSX.Element => {
  return (
    <div className="h-60 sm:h-80 xl:h-96  mt-6 bg-blue-site rounded-xl mb-12">
      <Carousel autoplay loop placeholder="Reviews carousel">
        {slice.items.map(({ name, review }, i) => (
          <div
            key={i}
            className="flex flex-col gap-14 h-full items-center justify-center text-white p-8"
          >
            <h3 className="text-2xl sm:text-3xl  max-w-xs sm:max-w-3xl font-site text-center leading-8 sm:leading-10">
              “ {review} “
            </h3>
            <p className="text-sm lg:text-lg">{name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ReviewsCarousel;
