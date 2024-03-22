import { PrismicNextLink } from '@prismicio/next';

export const components = {
  label: ({ node, children }) => {
    if (node.data.label === 'codespan') {
      return <code>{children}</code>;
    }
  },
  paragraph: ({ children }) => <p className="mb-6 text-base">{children}</p>,
  heading1: ({ children }) => <h1 className="mb-6">{children}</h1>,
  heading2: ({ children }) => <h2 className="mb-6">{children}</h2>,
  heading3: ({ children }) => <h3 className=" mb-6">{children}</h3>,
  list: ({ children }) => <ul className="">{children}</ul>,
  listItem: ({ children }) => <li className="mb-4">{children}</li>,
  hyperlink: ({ node, children }) => (
    <PrismicNextLink className="btn-main inline-block" field={node.data}>
      {children}
    </PrismicNextLink>
  ),
};
