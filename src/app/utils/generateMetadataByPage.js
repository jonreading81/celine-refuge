import { createClient, linkResolver } from '@/prismicio';
import { notFound } from 'next/navigation';
import * as prismic from '@prismicio/client';

export const generateMetadataForPage =
  (name) =>
  async ({ params: { lang } }) => {
    const client = createClient();
    const [page, settings] = await Promise.all([
      client.getByUID('page', name, { lang }),
      client.getSingle('settings'),
    ]).catch(() => notFound());

    const alternate_languages = page.alternate_languages.reduce(
      (pages, page) => ({
        [page.lang]: linkResolver(page),
        ...pages,
      }),
      {}
    );

    return {
      metadataBase: process.env.NEXT_PUBLIC_SITE_URL,
      applicationName: settings.data.site_title,
      title: `${prismic.asText(page.data.title)} — ${settings.data.site_title}`,
      description: page.data.meta_description,
      keywords: page.tags,
      openGraph: {
        siteName: settings.data.site_title,
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
