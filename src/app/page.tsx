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
import { ErrorBoundary } from '@app/components/ErrorBoundary';

const PAGE = 'home';

export const generateMetadata = generateMetadataForPage(PAGE);

export default async function Home() {
  const client = createClient();
  const {
    data: { slices, masthead_image },
  } = await client.getByUID('page', PAGE).catch(() => notFound());

  return (
    <div>
      <MastheadImage image={masthead_image} />
      <SliceWrapper>
        <ErrorBoundary>
          <SliceZone slices={slices} components={components} />
        </ErrorBoundary>
      </SliceWrapper>
    </div>
  );
}
