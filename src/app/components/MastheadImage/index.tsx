import { PrismicNextImage } from '@prismicio/next';

import type { ImageField } from '@prismicio/client';

type Props = {
  image: ImageField;
};

export const MastheadImage = ({ image }: Props) => {
  return (
    <div className="w-full h-[400px] overflow-hidden  relative">
      <PrismicNextImage
        field={image}
        priority={true}
        sizes="100vw"
        className="object-cover w-full"
      />
    </div>
  );
};
