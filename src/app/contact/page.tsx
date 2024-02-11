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
import { ContactForm } from '@app/components/ContactForm';

const PAGE = 'contact';

export default async function Contact() {
  const client = createClient();
  const {
    data: { slices, masthead_image, title },
  } = await client.getByUID('page', PAGE).catch(() => notFound());

  return (
    <>
      <MastheadImage image={masthead_image} />
      <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20">
        <h1 className="text-center py-8 font-site">{prismic.asText(title)}</h1>
        <ContactForm />
        <SliceZone slices={slices} components={components} />
      </div>
    </>
  );
}
