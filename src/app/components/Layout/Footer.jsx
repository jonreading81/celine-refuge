'use client';

import { components } from '@/slices';
import { SliceZone } from '@prismicio/react';
import * as prismic from '@prismicio/client';
import PageDataContext from '@app/context/PageDataContext';

const Footer = ({ slices, pages }) => (
  <PageDataContext.Provider value={{ pages }}>
    <footer className="m-h-56 leading-7  px-0 ">
      <SliceZone slices={slices} components={components} />
    </footer>
  </PageDataContext.Provider>
);

export default Footer;
