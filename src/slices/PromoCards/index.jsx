'use client';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { formatDate } from '@app/utils/date-formatter';
import { Slice } from '@app/components/Slice';
import { WrapWithLink } from '@app/components/WrapWithLink';

const columns = {
  1: ' lg:grid-cols-1',
  2: ' lg:grid-cols-2',
  3: ' lg:grid-cols-3',
  4: ' lg:grid-cols-4',
};

const formats = {
  Landscape: `aspect-[4/3]`,
  Portrait: `aspect-[3/4]`,
};

const widths = {
  Full: '',
  Large: 'max-w-screen-lg',
  Medium: 'max-w-screen-md',
};

const PromoCards = ({ slice: { primary, items } }) => {
  const { image_format: format, width } = primary;

  const column = columns[primary.columns] ?? columns[2];

  return (
    <Slice>
      <div
        className={`m-auto ${
          widths[width ?? 'Full']
        } grid grid-cols-1 ${column} gap-7 grid-flow-row`}
      >
        {items.map((item, id) => (
          <div
            key={id}
            className="relative border border-blue-gray-100 rounded-xl shadow-xl overflow-hidden flex flex-col h-full"
          >
            <div
              className={`${
                formats[format ?? 'Landscape']
              } relative overflow-hidden`}
            >
              <WrapWithLink link={item.link}>
                <PrismicNextImage
                  field={item.image}
                  priority={true}
                  sizes="100vw"
                  className="object-cover object-center h-full w-full"
                />
              </WrapWithLink>
              {item.date && (
                <span className="bg-blue-site text-white px-8 py-2 absolute bottom-0">
                  {formatDate(new Date(item.date))}
                </span>
              )}
            </div>
            <div className="bg-white relative mt-4 px-8 flex-1 ">
              <WrapWithLink link={item.link}>
                <h3 className="mt-2 pt-3 mb-6 ">{item.title}</h3>
              </WrapWithLink>
              <p className="text-base mb-10">{item.text}</p>
            </div>
            {item.link?.url && primary.button_text && (
              <div className=" m-8 mt-0">
                <PrismicNextLink
                  className="btn-primary bg-blue-site block w-full"
                  field={item.link}
                >
                  {primary.button_text}
                </PrismicNextLink>
              </div>
            )}
          </div>
        ))}
      </div>
    </Slice>
  );
};

export default PromoCards;
