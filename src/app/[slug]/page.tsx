import { CarouselClient } from '@app/components/Carousel/Carousel';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { generateMetadataForPage } from '@/app/utils/generateMetadataByPage';
import { MastheadImage } from '@app/components/MastheadImage';

type Params = { slug: string };

export const generateMetadata = async ({ params }: { params: Params }) => {
  return generateMetadataForPage(params.slug);
};

export default async function NewsItem({ params }: { params: Params }) {
  const client = createClient();
  const {
    data: { slices, title, masthead_image },
  } = await client.getByUID('page', params.slug).catch(() => notFound());

  return (
    <>
      <MastheadImage image={masthead_image} />
      <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20">
        <h1 className="text-center py-8 font-site">{prismic.asText(title)}</h1>
        <SliceZone slices={slices} components={components} />
      </div>
    </>
  );
}
