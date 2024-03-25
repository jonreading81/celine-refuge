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
import { getPageData } from '@/app/utils/getPageData';
import { LanguageSelectorWithContext } from '@app/components/LanguageSelector/WithContext';

const PAGE = 'home';

export const generateMetadata = generateMetadataForPage(PAGE);

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const {
    slices,
    title,
    masthead_image,
    navigationSlice,
    footer,
    pages,
    locales,
  } = await getPageData({
    slug: PAGE,
    lang,
  });

  return (
    <>
      <Header navigationSlice={navigationSlice} locales={locales} lang={lang} />
      <main className="bg-white min-h-[600px]">
        <MastheadImage image={masthead_image} />
        <LanguageSelectorWithContext locales={locales} lang={lang} />
        <SliceWrapper>
          <h1 className="max-w-screen-md m-auto text-center  mb-10 ">
            {prismic.asText(title)}
          </h1>
          <ErrorBoundary>
            <SliceZone slices={slices} components={components} />
          </ErrorBoundary>
        </SliceWrapper>
      </main>
      <Footer {...footer.data} pages={pages} />
    </>
  );
}
