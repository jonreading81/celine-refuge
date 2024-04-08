import { notFound } from 'next/navigation';
import * as prismic from '@prismicio/client';
import { createClient } from '@/prismicio';
import { getLocales } from '@app/utils/getLocales';

export const getPageData = async ({ slug, lang }) => {
  const client = createClient();

  const [
    page,
    {
      data: {
        slices: [navigationSlice],
      },
    },
    footer,
    pages,
    settings,
  ] = await Promise.all([
    client.getByUID('page', slug, {
      lang,
    }),
    client.getSingle('navigation', { lang }),
    client.getSingle('footer', { lang }),
    client.getAllByType('page', {
      predicates: [prismic.filter.not('my.page.uid', 'home')],
      lang,
      orderings: {
        field: 'my.page.title',
        direction: 'asc',
      },
    }),
    client.getSingle('settings'),
  ]).catch(() => notFound());

  const locales = await getLocales(page, client);

  const {
    data: { slices, title, masthead_image },
  } = page;

  return {
    slices,
    title,
    masthead_image,
    navigationSlice,
    footer,
    pages,
    locales,
    settings,
  };
};
