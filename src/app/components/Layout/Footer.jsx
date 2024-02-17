import './footer.css';
import { Logo } from '@app/components/Logo/Logo';
import { ContactInfo } from '@app/components/ContactInfo';
import { components } from '@/slices';
import { SliceZone } from '@prismicio/react';

const Footer = ({ slices }) => (
  <footer className="m-h-56 leading-7  px-8 pt-12 ">
    <SliceZone slices={slices} components={components} />
    <div className="mx-auto text-center sm:text-xs mt-6">
      <Logo />
      <button className="font-default mb-10">© 2035 Celine</button>
    </div>
  </footer>
);

export default Footer;
