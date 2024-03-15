'use client';
import * as React from 'react';
import {
  Carousel as TailwindCarousel,
  CarouselProps,
  IconButton,
} from '@material-tailwind/react';

const Carousel = ({ children, placeholder, ...props }) => (
  <TailwindCarousel placeholder={placeholder} {...props}>
    {children}
  </TailwindCarousel>
);

export default Carousel;
