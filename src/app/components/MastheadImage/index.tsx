import { PrismicNextImage } from '@prismicio/next';

export const MastheadImage = ({ image }) => {
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
