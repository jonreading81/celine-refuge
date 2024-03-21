import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import * as prismic from '@prismicio/client';
import { SliceZone } from '@prismicio/react';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { generateMetadataForPage } from '@/app/utils/generateMetadataByPage';
import { PrismicNextImage } from '@prismicio/next';
import { MastheadImage } from '@app/components/MastheadImage';
import { SliceWrapper } from '@app/components/SliceWrapper';
import { ErrorBoundary } from '@app/components/ErrorBoundary';
import { getLocales } from '@app/utils/getLocales';
import Footer from '@app/components/Layout/Footer';
import Header from '@app/components/Layout/Header';

const PAGE = 'home';

export const generateMetadata = generateMetadataForPage(PAGE);

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const client = createClient();

  const [
    page,
    {
      data: {
        slices: [navigationSlice],
      },
    },
    footer,
  ] = await Promise.all([
    client.getByUID('page', PAGE, {
      lang,
    }),
    client.getSingle('navigation', { lang }),
    client.getSingle('footer', { lang }),
  ]).catch(() => notFound());

  const locales = await getLocales(page, client);

  const {
    data: { slices, title, masthead_image },
  } = page;

  return (
    <>
      <Header navigationSlice={navigationSlice} locales={locales} lang={lang} />
      <main className="bg-white min-h-[600px]">
        <MastheadImage image={masthead_image} />
        <SliceWrapper hasIndent>
          <h1 className="text-center  mb-10 ">{prismic.asText(title)}</h1>
          <ErrorBoundary>
            <SliceZone slices={slices} components={components} />
          </ErrorBoundary>
        </SliceWrapper>
      </main>
      <Footer {...footer.data} />
    </>
  );
}
