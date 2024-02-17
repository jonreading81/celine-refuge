import './footer.css';
import { Logo } from '@app/components/Logo/Logo';
import { ContactInfo } from '@app/components/ContactInfo';

const Footer = () => (
  <footer className="m-h-56 leading-7  px-8 pt-12 ">
    <ContactInfo />
    <div className="mx-auto text-center sm:text-xs mt-6">
      <Logo />
      <button className="font-default mb-10">© 2035 Celine</button>
    </div>
  </footer>
);

export default Footer;
