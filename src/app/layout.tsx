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
  const {
    data: {
      slices: [navigationSlice],
    },
  } = await client.getByUID('navigation', 'header');

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="text-blue-site bg-white">
        <Header navigationSlice={navigationSlice} />
        <main className="bg-white min-h-[600px]">{children}</main>
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
