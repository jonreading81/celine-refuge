import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
} from '@prismicio/react';

import * as styles from './styles.module.css';

const components = {
  label: ({ node, children }) => {
    if (node.data.label === 'codespan') {
      return <code>{children}</code>;
    }
  },
  paragraph: ({ children }) => <p className="mb-8 text-md">{children}</p>,
  heading1: ({ children }) => <h1 className="mb-12">{children}</h1>,
  heading2: ({ children }) => <h2 className="mb-12">{children}</h2>,
};

export default function RichText({ slice }) {
  return (
    <section className={`${styles.wrapper} flex justify-center items-center`}>
      <div className="max-w-[740px]">
        <PrismicRichText
          field={slice.primary.content}
          components={components}
        />
      </div>
    </section>
  );
}
