import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

import { components } from '@app/utils/richTextComponents';

import * as styles from './styles.module.css';

export default function RichText({ slice }) {
  return (
    <section
      className={`${styles.wrapper} flex justify-center items-center mb-12`}
    >
      <div className="max-w-[840px]">
        <PrismicRichText
          field={slice.primary.content}
          components={components}
        />
      </div>
    </section>
  );
}
