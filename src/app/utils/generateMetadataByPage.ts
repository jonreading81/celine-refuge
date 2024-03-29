import { createClient, linkResolver } from '@/prismicio';
import { notFound } from 'next/navigation';
import * as prismic from '@prismicio/client';

export const generateMetadataForPage =
  (name: string) =>
  async ({ params: { lang } }: { params: { lang: string } }) => {
    const client = createClient();
    const page = await client
      .getByUID('page', name, { lang })
      .catch(() => notFound());

    const alternate_languages = page.alternate_languages.reduce(
      (pages, page) => ({
        [page.lang]: linkResolver(page),
        ...pages,
      }),
      {}
    );

    return {
      metadataBase: process.env.NEXT_PUBLIC_SITE_URL,
      title: prismic.asText(page.data.title),
      description: page.data.meta_description,
      keywords: page.tags,
      openGraph: {
        title: page.data.meta_title || undefined,
        images: [
          {
            url: page.data.meta_image.url || '',
          },
        ],
      },
      alternates: {
        canonical: linkResolver(page),
        languages: alternate_languages,
      },
    };
  };
