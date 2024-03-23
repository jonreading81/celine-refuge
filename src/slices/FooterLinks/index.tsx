import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { usePageData } from '@app/hooks/usePageData';
import { PrismicNextLink } from '@prismicio/next';
import * as prismic from '@prismicio/client';

/**
 * Props for `FooterLinks`.
 */
export type FooterLinksProps = SliceComponentProps<Content.FooterLinksSlice>;

/**
 * Component for "FooterLinks" Slices.
 */
const FooterLinks = (): JSX.Element => {
  const { pages } = usePageData();
  return (
    <div className="font-scondary-bold text-base bg-blue-site text-white">
      <ul className=" px-4 py-12 grid  md:grid-cols-4 gap-4 m-auto max-w-screen-2xl">
        {pages.map(({ data: { title }, ...page }) => (
          <li key={title}>
            <PrismicNextLink field={page} className="underline ">
              {prismic.asText(title)}
            </PrismicNextLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
