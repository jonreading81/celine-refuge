import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import * as prismic from '@prismicio/client';

/**
 * Props for `PromoPanel`.
 */
export type PromoPanelProps = SliceComponentProps<Content.PromoPanelSlice>;

/**
 * Component for "PromoPanel" Slices.
 */
const PromoPanel = ({ slice: { items } }: PromoPanelProps): JSX.Element => {
  if (items.length < 2) return <></>;

  return (
    <section className="mb-6">
      <div className="mx-auto relative sm:px-20 py-5">
        <div className="flex mt-12 sm:mt-28 sm:gap-12 flex-col sm:flex-row">
          <div className="basis-1/3">
            <div className="h-[370px] relative overflow-hidden">
              <PrismicNextImage
                field={items[0].image}
                className="object-cover w-full"
              />
            </div>
            <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:mt-[-300px]">
              <h3 className="text-2xl font-site">{items[0].title}</h3>
              <p className="my-6 text-sm">{items[0].intro}</p>
              <PrismicNextLink
                className="text-purple-site py-6 font-site"
                field={items[0].page_link}
              >
                Learn more about {items[0].title}
              </PrismicNextLink>
            </div>
          </div>
          <div className="basis-2/3">
            <div className="h-[370px] relative overflow-hidden">
              <PrismicNextImage
                field={items[1].image}
                className="object-cover w-full"
              />
            </div>
            <div className="border-y-4 border-blue-site p-8 sm:w-60 relative bg-white sm:ml-32 sm:mt-[-430px]">
              <h3 className="text-2xl font-site">{items[1].title}</h3>
              <p className="my-6 text-sm">{items[1].intro}</p>

              <PrismicNextLink
                className="text-purple-site py-6 font-site"
                field={items[1].page_link}
              >
                Learn more about {items[1].title}
              </PrismicNextLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoPanel;
