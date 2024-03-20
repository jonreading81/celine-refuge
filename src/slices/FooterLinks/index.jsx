import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';

const FooterLinks = ({ slice }) => {
  return (
    <div className="bg-blue-site text-white">
      <ul className=" px-4 py-12 grid grid-cols-4 gap-4 m-auto max-w-screen-2xl">
        {slice.items.map(({ link, title }) => (
          <li key={title}>
            <PrismicNextLink className="underline text-sm">
              {title}
            </PrismicNextLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
