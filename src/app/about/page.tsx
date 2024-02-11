import { CarouselClient } from '@app/components/Carousel/Carousel';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { generateMetadataForPage } from '@/app/utils/generateMetadataByPage';
import { PrismicNextImage } from '@prismicio/next';
import { MastheadImage } from '@app/components/MastheadImage';

const PAGE = 'about';

export const generateMetadata = generateMetadataForPage(PAGE);

export default async function About() {
  const client = createClient();
  const {
    data: { slices, title, masthead_image },
  } = await client.getByUID('page', PAGE).catch(() => notFound());

  return (
    <div className="relative">
      <MastheadImage image={masthead_image} />
      <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20">
        <h1 className="text-center py-8 font-site">{prismic.asText(title)}</h1>

        <SliceZone slices={slices} components={components} />
      </div>
    </div>
  );
}
