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
  paragraph: ({ children }) => <p className="mb-4 text-md">{children}</p>,
  heading1: ({ children }) => <h1 className="mb-6">{children}</h1>,
  heading1: ({ children }) => <h1 className="mb-6">{children}</h1>,
};

type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

export default function RichText({ slice }: RichTextProps) {
  return (
    <section className="flex justify-center items-center">
      <div className="max-w-prose">
        <PrismicRichText
          field={slice.primary.content}
          components={components}
        />
      </div>
    </section>
  );
}
