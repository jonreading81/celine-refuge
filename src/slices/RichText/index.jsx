import { PrismicRichText, SliceComponentProps } from '@prismicio/react';

import { components } from '@app/utils/richTextComponents';

import * as styles from './styles.module.css';

const RichText = ({
  slice: {
    primary: { content, text_centered },
  },
}) => (
  <section
    className={`${styles.wrapper} flex justify-center items-center mb-12`}
  >
    <div className={`w-full max-w-prose ${text_centered && 'text-center'}`}>
      <PrismicRichText field={content} components={components} />
    </div>
  </section>
);

export default RichText;
