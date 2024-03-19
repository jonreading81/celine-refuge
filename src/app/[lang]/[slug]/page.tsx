import { notFound } from 'next/navigation';

import { SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { generateMetadataForPage } from '@/app/utils/generateMetadataByPage';
import { MastheadImage } from '@app/components/MastheadImage';
import { SliceWrapper } from '@app/components/SliceWrapper';
import { getLocales } from '@app/utils/getLocales';
import Footer from '@app/components/Layout/Footer';
import Header from '@app/components/Layout/Header';
import { LanguageSwitcher } from '@app/components/LanguageSwitcher';
import { ErrorBoundary } from '@app/components/ErrorBoundary';

type Params = { slug: string; lang: string };

export const generateMetadata = async ({ params }: { params: Params }) => {
  return generateMetadataForPage(params.slug)({ params });
};

export default async function PageWithSlug({
  params: { slug, lang },
}: {
  params: Params;
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
    client.getByUID('page', slug, {
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
      <Header navigationSlice={navigationSlice} />
      <LanguageSwitcher locales={locales} />
      <main className="bg-white min-h-[600px]">
        <MastheadImage image={masthead_image} />
        <SliceWrapper>
          <h1 className="text-center  mb-10 font-site">
            {prismic.asText(title)}
          </h1>
          <ErrorBoundary>
            <SliceZone slices={slices} components={components} />
          </ErrorBoundary>
        </SliceWrapper>
      </main>
      <Footer {...footer.data} />
    </>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType('page', {
    predicates: [prismic.filter.not('my.page.uid', 'home')],
    lang: '*',
  });

  return pages.map((page) => ({ uid: page.uid, lang: page.lang }));
}
