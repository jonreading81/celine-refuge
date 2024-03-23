import { Content } from '@prismicio/client';
import { usePageData } from '@app/hooks/usePageData';
import { PrismicNextLink } from '@prismicio/next';
import * as prismic from '@prismicio/client';

/**
 * Component for "FooterLinks" Slices.
 */
const FooterLinks = () => {
  const { pages } = usePageData();

  return (
    <div className="font-scondary-bold text-base bg-blue-site text-white">
      <ul className=" px-4 py-12 grid  md:grid-cols-4 gap-4 m-auto max-w-screen-2xl">
        {pages.map(({ data: { title }, ...page }) => (
          <li key={page.url}>
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
