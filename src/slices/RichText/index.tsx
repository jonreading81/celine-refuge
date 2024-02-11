import type { Content } from '@prismicio/client';
import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
} from '@prismicio/react';

const components: JSXMapSerializer = {
  label: ({ node, children }) => {
    if (node.data.label === 'codespan') {
      return <code>{children}</code>;
    }
  },
  paragraph: ({ children }) => <p className="mb-4">{children}</p>,
  heading1: ({ children }) => <h1 className="mb-6">{children}</h1>,
};

type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

export default function RichText({ slice }: RichTextProps) {
  return (
    <section>
      <PrismicRichText field={slice.primary.content} components={components} />
    </section>
  );
}
