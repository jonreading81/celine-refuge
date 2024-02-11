import { CarouselClient } from '@app/components/Carousel/Carousel';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';

import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { generateMetadataForPage } from '@/app/utils/generateMetadataByPage';
import { PrismicNextImage } from '@prismicio/next';

const PAGE = 'contact';

export default async function Contact() {
  const client = createClient();
  const {
    data: { slices, masthead_image, title },
  } = await client.getByUID('page', PAGE).catch(() => notFound());

  return (
    <>
      <div className="w-full h-[400px] overflow-hidden  relative">
        <PrismicNextImage
          field={masthead_image}
          priority={true}
          sizes="100vw"
          className="object-cover w-full"
        />
      </div>
      <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20">
        <h1 className="text-center py-8 font-site">{prismic.asText(title)}</h1>
        <ContactForm />
        <SliceZone slices={slices} components={components} />
      </div>
    </>
  );
}

const ContactForm = () => {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <form className="border-2 border-blue-site p-8">
        <div className="flex flex-col sm:flex-row sm:gap-12">
          <div className="basis-1/2">
            <label className="text-xs" htmlFor="name">
              First name *
            </label>
            <input
              className="input"
              type="text"
              name="name"
              id="name"
              required={true}
            />
            <label className="text-xs" htmlFor="email">
              Email *
            </label>
            <input
              className="input"
              type="email"
              name="email"
              id="email"
              required={true}
            />
          </div>
          <div className="basis-1/2">
            <label className="text-xs" htmlFor="name">
              Last name
            </label>
            <input className="input" type="text" name="last" id="last" />
            <label className="text-xs" htmlFor="phone">
              Phone
            </label>
            <input className="input" type="tel" name="phone" id="phone" />
          </div>
        </div>
        <label className="text-xs" htmlFor="address">
          Address
        </label>
        <input className="input" type="text" name="address" id="address" />
        <button className="btn-main w-full mt-6 text-xl" type="submit">
          Apply
        </button>
      </form>
    </div>
  );
};
