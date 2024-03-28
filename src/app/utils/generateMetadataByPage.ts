import { createClient } from '@/prismicio';
import { notFound } from 'next/navigation';
import * as prismic from '@prismicio/client';

export const generateMetadataForPage =
  (name: string) =>
  async ({ params: { lang } }: { params: { lang: string } }) => {
    const client = createClient();
    const page = await client
      .getByUID('page', name, { lang })
      .catch(() => notFound());

    return {
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
    };
  };
