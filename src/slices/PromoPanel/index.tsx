import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import * as prismic from '@prismicio/client';

import { Slice } from '@app/components/Slice';

/**
 * Props for `PromoPanel`.
 */
export type PromoPanelProps = SliceComponentProps<Content.PromoPanelSlice>;

/**
 * Component for "PromoPanel" Slices.
 */
const PromoPanel = ({ slice: { items } }: PromoPanelProps): JSX.Element => {
  return (
    <Slice>
      <div className="mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 grid-flow-row mb-12">
          {items.map((item, index) => (
            <div key={index}>
              <div className="h-[300px] lg:h-[400px] relative overflow-hidden">
                <PrismicNextLink field={item.page_link}>
                  <PrismicNextImage
                    field={item.image}
                    className=" object-cover object-center w-full h-full"
                  />
                </PrismicNextLink>
              </div>
              <div className="border-y-4 border-blue-site p-8 md:w-[70%] lg:w-[60%] relative bg-white md:mt-[-200px]">
                <PrismicNextLink field={item.page_link}>
                  <h3 className="text-2xl font-site">{item.title}</h3>
                </PrismicNextLink>
                <p className="my-6 text-sm">{item.intro}</p>
                <PrismicNextLink
                  className="text-purple-site py-6 font-site"
                  field={item.page_link}
                >
                  En savoir plus sur {item.title}
                </PrismicNextLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slice>
  );
};

export default PromoPanel;
