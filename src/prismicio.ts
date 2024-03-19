import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';
import config from '../slicemachine.config.json';

/**
 * The project's Prismic repository name.
 */
export const repositoryName = process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT;

/**
 * The project's Prismic Route Resolvers. This list determines a Prismic document's URL.
 */
const routes: prismic.ClientConfig['routes'] = [
  {
    type: 'page',
    uid: 'home',
    path: '/:lang?',
  },
  {
    type: 'page',
    path: '/:lang?/:uid',
  },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    fetchOptions: {
      next: { revalidate: process.env.NODE_ENV === 'production' ? 60 : 5 },
    },
    ...config,
  });

  prismicNext.enableAutoPreviews({ client });

  return client;
};

export const linkResolver: prismic.LinkResolverFunction = (doc) => {
  if (doc.type === 'page') {
    return `/${doc.lang}/${doc.uid}`;
  }
  if (doc.uid === 'home') {
    return `/${doc.lang}`;
  }
  return '/';
};
