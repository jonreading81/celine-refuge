import { createClient, linkResolver } from '@/prismicio';

export default async function sitemap() {
  const client = createClient();

  const pages = await client.getAllByType('page', {
    lang: 'fr-fr',
    orderings: {
      field: 'my.page.title',
      direction: 'asc',
    },
  });

  return pages.map((page) => {
    const lastModified = new Date(page.last_publication_date).toISOString();

    const languages = page.alternate_languages.reduce(
      (pages, page) => ({
        [page.lang]: linkResolver(page),
        ...pages,
      }),
      {}
    );

    return {
      url: linkResolver(page),
      lastModified,
      alternates: {
        languages,
      },
    };
  });
}
