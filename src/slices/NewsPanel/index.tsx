import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import { formatDate } from '@app/utils/date-formatter';
import { Slice } from '@app/components/Slice';
/**
 * Props for `NewsPanel`.
 */
export type NewsPanelProps = SliceComponentProps<Content.NewsPanelSlice>;

/**
 * Component for "NewsPanel" Slices.
 */
const NewsPanel = ({ slice: { items } }: NewsPanelProps): JSX.Element => {
  return (
    <Slice>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 grid-flow-row">
        {items!.map((item, id) => (
          <div
            key={id}
            className="relative border border-blue-gray-100 rounded-xl shadow-xl overflow-hidden"
          >
            <div className="h-[320px] relative overflow-hidden">
              <PrismicNextLink field={item.link}>
                <PrismicNextImage
                  field={item.image}
                  priority={true}
                  sizes="100vw"
                  className="object-cover object-center h-full w-full"
                />
              </PrismicNextLink>
              {item.date && (
                <span className="bg-blue-site text-white px-6 py-2 absolute bottom-0">
                  {formatDate(new Date(item.date))}
                </span>
              )}
            </div>
            <div className="bg-white relative mt-4 px-8 pb-10">
              <PrismicNextLink field={item.link}>
                <h2 className="mt-2 pt-3 mb-10 ">{item.title}</h2>
              </PrismicNextLink>
              <p className="text-sm mb-6">{item.intro}</p>

              <PrismicNextLink
                className="text-purple-site py-6 font-primary"
                field={item.link}
              >
                Apprendre encore plus
              </PrismicNextLink>
            </div>
          </div>
        ))}
      </div>
    </Slice>
  );
};

export default NewsPanel;
