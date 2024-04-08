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
import { ErrorBoundary } from '@app/components/ErrorBoundary';
import { getPageData } from '@/app/utils/getPageData';

type Params = { slug: string; lang: string };

export const generateMetadata = async ({ params }: { params: Params }) => {
  return generateMetadataForPage(params.slug)({ params });
};

export default async function PageWithSlug({
  params: { slug, lang },
}: {
  params: Params;
}) {
  const {
    slices,
    title,
    masthead_image,
    navigationSlice,
    footer,
    pages,
    locales,
    settings,
  } = await getPageData({
    slug,
    lang,
  });

  return (
    <>
      <Header
        navigationSlice={navigationSlice}
        locales={locales}
        lang={lang}
        pgaes={pages}
        settings={settings}
      />
      <main className="bg-white min-h-[600px]">
        {masthead_image.url && <MastheadImage image={masthead_image} />}
        <SliceWrapper>
          <h1 className="max-w-screen-md m-auto text-center  mb-10 ">
            {prismic.asText(title)}
          </h1>
          <ErrorBoundary>
            <SliceZone slices={slices} components={components} />
          </ErrorBoundary>
        </SliceWrapper>
      </main>
      <Footer {...footer.data} pages={pages} settings={settings} />
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
