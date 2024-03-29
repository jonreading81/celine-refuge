import { PrismicNextImage } from '@prismicio/next';

import type { ImageField } from '@prismicio/client';

type Props = {
  image: ImageField;
};

export const MastheadImage = ({ image }: Props) => (
  <div className="w-full aspect-video max-h-[360px] overflow-hidden  relative">
    <PrismicNextImage
      field={image}
      priority={true}
      sizes="100vw"
      className="object-cover object-center h-full w-full"
    />
  </div>
);
