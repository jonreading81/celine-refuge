'use client';
import {
  Carousel as TailwindCarousel,
  IconButton,
} from '@material-tailwind/react';

import PreviousArrow from './PreviousArrow';
import NextArrow from './NextArrow';

const Carousel = ({ children, ...props }) => (
  <TailwindCarousel prevArrow={PreviousArrow} nextArrow={NextArrow} {...props}>
    {children}
  </TailwindCarousel>
);

export default Carousel;
