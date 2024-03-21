'use client';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { formatDate } from '@app/utils/date-formatter';
import { Slice } from '@app/components/Slice';
import { WrapWithLink } from '@app/components/WrapWithLink';
import { Button } from '@material-tailwind/react';

const PromoCards = ({ slice: { primary, items } }) => {
  const columns = {
    2: ' lg:grid-cols-2',
    3: ' lg:grid-cols-3',
    4: ' lg:grid-cols-4',
  };

  const column = columns[primary.columns] ?? columns[2];

  return (
    <Slice>
      <div className={`grid grid-cols-1 ${column} gap-7 grid-flow-row`}>
        {items.map((item, id) => (
          <div
            key={id}
            className="relative border border-blue-gray-100 rounded-xl shadow-xl overflow-hidden"
          >
            <div className="h-[320px] relative overflow-hidden">
              <WrapWithLink link={item.link}>
                <PrismicNextImage
                  field={item.image}
                  priority={true}
                  sizes="100vw"
                  className="object-cover object-center h-full w-full"
                />
              </WrapWithLink>
              {item.date && (
                <span className="bg-blue-site text-white px-6 py-2 absolute bottom-0">
                  {formatDate(new Date(item.date))}
                </span>
              )}
            </div>
            <div className="bg-white relative mt-4 px-8 pb-10">
              <WrapWithLink link={item.link}>
                <h2 className="mt-2 pt-3 mb-10 text-2xl">{item.title}</h2>
              </WrapWithLink>
              <p className="text-sm mb-6">{item.text}</p>

              {item.link?.url && primary.button_text && (
                <WrapWithLink
                  className="text-purple-site py-6 font-primary"
                  link={item.link}
                >
                  <Button className="bg-blue-site w-full">
                    {primary.button_text}
                  </Button>
                </WrapWithLink>
              )}
            </div>
          </div>
        ))}
      </div>
    </Slice>
  );
};

export default PromoCards;
