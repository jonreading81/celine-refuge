import './footer.css';
import { Logo } from '@app/components/Logo/Logo';
import { ContactInfo } from '@app/components/ContactInfo';
import { components } from '@/slices';
import { SliceZone } from '@prismicio/react';

const Footer = ({ slices }) => (
  <footer className="m-h-56 leading-7  px-8 pt-12 ">
    <SliceZone slices={slices} components={components} />
  </footer>
);

export default Footer;
