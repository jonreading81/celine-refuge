import './globals.css';
import 'node_modules/flag-icons/css/flag-icons.min.css';

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Aleo:wght@100..900&family=Lobster&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="text-blue-site bg-white">
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
