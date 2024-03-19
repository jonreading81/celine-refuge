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
import { getLocales } from '@app/utils/getLocales';
import { LanguageSwitcher } from '@app/components/LanguageSwitcher';

const PAGE = 'home';

export const generateMetadata = generateMetadataForPage(PAGE);

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const client = createClient();
  const page = await client
    .getByUID('page', PAGE, {
      lang,
    })
    .catch(() => notFound());

  const locales = await getLocales(page, client);

  const {
    data: { slices, masthead_image },
  } = page;

  return (
    <div>
      <LanguageSwitcher locales={locales} />
      <MastheadImage image={masthead_image} />
      <SliceWrapper>
        <ErrorBoundary>
          <SliceZone slices={slices} components={components} />
        </ErrorBoundary>
      </SliceWrapper>
    </div>
  );
}
