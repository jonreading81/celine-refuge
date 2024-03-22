import './footer.css';
import { Logo } from '@app/components/Logo/Logo';
import { ContactInfo } from '@app/components/ContactInfo';
import { components } from '@/slices';
import { SliceZone } from '@prismicio/react';
import { PrismicNextLink } from '@prismicio/next';
import * as prismic from '@prismicio/client';

const FooterLinks = ({ pages }) => (
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

const Footer = ({ slices, pages }) => (
  <footer className="m-h-56 leading-7  px-0 ">
    <SliceZone slices={slices} components={components} />
    <FooterLinks pages={pages} />
  </footer>
);

export default Footer;
