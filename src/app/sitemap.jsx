import { createClient, linkResolver } from '@/prismicio';

export default async function sitemap() {
  const client = createClient();

  const pages = await client.getAllByType('page', {
    lang: 'fr-fr',
  });

  return pages.map((page) => {
    const lastModified = new Date(page.last_publication_date).toISOString();
    const url = new URL(linkResolver(page), process.env.NEXT_PUBLIC_SITE_URL);

    return {
      url: url.href,
      lastModified,
    };
  });
}
