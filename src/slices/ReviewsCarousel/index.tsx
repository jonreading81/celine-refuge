'use client';

import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { Carousel } from '@material-tailwind/react';

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
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-6 bg-blue-site rounded-xl ">
      <Carousel autoplay loop placeholder="Reviews carousel">
        {slice.items.map(({ name, review }, i) => (
          <div
            key={i}
            className="flex flex-col gap-14 h-full items-center justify-center text-white p-8"
          >
            <h3 className="text-lg sm:text-4xl max-w-xs sm:max-w-3xl font-site">
              “{review}“
            </h3>
            <p>{name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ReviewsCarousel;
