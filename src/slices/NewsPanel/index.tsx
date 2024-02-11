import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { formatDate } from '@app/utils/date-formatter';

/**
 * Props for `NewsPanel`.
 */
export type NewsPanelProps = SliceComponentProps<Content.NewsPanelSlice>;

/**
 * Component for "NewsPanel" Slices.
 */
const NewsPanel = ({ slice: { items } }: NewsPanelProps): JSX.Element => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-7 grid-flow-row mt-10">
        {items!.map((item) => (
          <div key={item.id} className="relative border">
            <div className="h-[320px] relative">
              <PrismicNextImage
                field={item.image}
                priority={true}
                sizes="100vw"
                className="object-cover w-full"
              />
              {item.date && (
                <span className="bg-blue-site text-white px-6 py-2 absolute bottom-[-20px]">
                  {formatDate(new Date(item.date))}
                </span>
              )}
            </div>
            <div className="bg-white relative mt-10 px-8 pb-10">
              <h2 className="mb-10 font-site">{item.title}</h2>
              <p className="text-sm mb-6">{item.intro}</p>

              <PrismicNextLink
                className="text-purple-site py-6 font-site"
                field={item.link}
              >
                Learn More
              </PrismicNextLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsPanel;
