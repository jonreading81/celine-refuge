import { notFound } from 'next/navigation';

import { SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { generateMetadataForPage } from '@/app/utils/generateMetadataByPage';
import { MastheadImage } from '@app/components/MastheadImage';
import { SliceWrapper } from '@app/components/SliceWrapper';
import { getLocales } from '@app/utils/getLocales';
import { LanguageSwitcher } from '@app/components/LanguageSwitcher';

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

  const page = await client
    .getByUID('page', slug, { lang })
    .catch(() => notFound());

  const locales = await getLocales(page, client);

  const {
    data: { slices, title, masthead_image },
  } = page;
  return (
    <>
      <LanguageSwitcher locales={locales} />
      <MastheadImage image={masthead_image} />
      <SliceWrapper>
        <h1 className="text-center  mb-10 font-site">
          {prismic.asText(title)}
        </h1>
        <SliceZone slices={slices} components={components} />
      </SliceWrapper>
    </>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  // ⬇️ Note this line using a '*' for the lang parameter
  const pages = await client.getAllByType('page', {
    predicates: [prismic.filter.not('my.page.uid', 'home')],
    lang: '*',
  });

  return pages.map((page) => ({ uid: page.uid, lang: page.lang }));
}
