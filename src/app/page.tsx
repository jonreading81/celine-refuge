import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { generateMetadataForPage } from '@/app/utils/generateMetadataByPage';
import { PrismicNextImage } from '@prismicio/next';
import { MastheadImage } from '@app/components/MastheadImage';
import { SliceWrapper } from '@app/components/SliceWrapper';

const PAGE = 'home';

export const generateMetadata = generateMetadataForPage(PAGE);

export default async function Home() {
  const client = createClient();
  const {
    data: { slices, title, masthead_image },
  } = await client.getByUID('page', PAGE).catch(() => notFound());

  return (
    <div>
      <MastheadImage image={masthead_image} />
      <SliceWrapper>
        <SliceZone slices={slices} components={components} />
      </SliceWrapper>
    </div>
  );
}
