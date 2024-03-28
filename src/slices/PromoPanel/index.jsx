'use client';
import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import * as prismic from '@prismicio/client';

import { WrapWithLink } from '@app/components/WrapWithLink';
import { Slice } from '@app/components/Slice';

/**
 * Component for "PromoPanel" Slices.
 */
const PromoPanel = ({ slice: { primary, items } }) => {
  const columns = {
    2: ' lg:grid-cols-2',
    3: ' lg:grid-cols-3',
    4: ' lg:grid-cols-4',
  };

  const column = columns[primary.columns] ?? columns[2];

  return (
    <Slice>
      <div className="mx-auto relative">
        <div
          className={`grid grid-cols-1 ${column} gap-x-8 gap-y-20 grid-flow-row mb-12`}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="relative rounded-lg shadow-xl overflow-hidden"
            >
              <div className="aspect-[5/3] relative overflow-hidden">
                <WrapWithLink link={item.page_link}>
                  <PrismicNextImage
                    field={item.image}
                    className=" object-cover object-center w-full h-full"
                  />
                </WrapWithLink>
              </div>
              <div className="border-t-4 border-blue-site p-8 md:w-[70%] lg:w-[60%]  bg-white  md:absolute bottom-0  opacity-95">
                <WrapWithLink link={item.page_link}>
                  <h3 className="text-2xl ">{item.title}</h3>
                </WrapWithLink>
                <p className="my-6 text-sm">{item.intro}</p>
                {item.page_link.url && primary.button_text && (
                  <WrapWithLink link={item.page_link} className="btn-main">
                    {primary.button_text}
                  </WrapWithLink>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slice>
  );
};

export default PromoPanel;
