import Image, { ImageProps } from 'next/image';
import { PLACEHOLDER_IMAGE } from '@app/constants';

export function WixMediaImage({
  media,
  height = 320,
  width = 640,
  alt = 'no info available for image',
  className,
  sizes = '10vw',
  objectFit,
  disableZoom = false,
  priority = false,
  src,
}: {
  src: string;
  media?: string;
  alt?: string;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  disableZoom?: boolean;
  objectFit?: 'cover' | 'contain';
  priority?: boolean;
}) {
  const styleProps: Partial<ImageProps> = {
    ...(objectFit
      ? { style: { objectFit }, fill: true, sizes }
      : { width, height }),
  };

  return (
    <div className={`flex items-center justify-center h-full`}>
      <div className="overflow-hidden relative group w-full h-full">
        <Image
          {...styleProps}
          src={src}
          alt={alt}
          className={`object-cover w-full ${
            !disableZoom ? 'group-hover:scale-110' : ''
          } transition duration-300 ease-in-out ${className}`}
          priority={priority}
        />
      </div>
    </div>
  );
}
