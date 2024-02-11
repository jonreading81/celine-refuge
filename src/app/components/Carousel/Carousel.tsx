'use client';
import { Carousel } from 'flowbite-react';

export const CarouselClient = () => {
  const texts = [
    '“I love this place and Celine”',
    '“Such amazing food, I would recommend this place!”',
    '“More complements to how great it is”',
  ];

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-10 sm:mt-20">
      <Carousel indicators={false}>
        {texts.map((text, i) => (
          <div
            key={i}
            className="flex flex-col gap-14 h-full items-center justify-center bg-blue-site text-white p-8"
          >
            <h3 className="text-lg sm:text-4xl max-w-xs sm:max-w-3xl font-site">
              {text}
            </h3>
            <p>Nora Jacobs, Climber</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
