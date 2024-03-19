import './globals.css';

import { PrismicPreview } from '@prismicio/next';
import { repositoryName } from '@/prismicio';

import Footer from '@app/components/Layout/Footer';
import Header from '@app/components/Layout/Header';
import { createClient } from '@/prismicio';
import { Metadata } from 'next';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const client = createClient();

  const [
    {
      data: {
        slices: [navigationSlice],
      },
    },
    footer,
  ] = await Promise.all([
    client.getSingle('navigation', { lang: 'en-gb' }),
    client.getSingle('footer'),
  ]);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="text-blue-site bg-white">
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
