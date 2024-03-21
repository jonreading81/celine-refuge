import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';

export const WrapWithLink = ({ children, link, ...props }) =>
  link.url ? (
    <PrismicNextLink field={link} {...props}>
      {children}
    </PrismicNextLink>
  ) : (
    children
  );
