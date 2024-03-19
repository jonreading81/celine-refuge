import Image from 'next/image';
import logo from './logo.svg';
import Link from 'next/link';

export const Logo = () => {
  return (
    <h2>
      <Link href="/">
        <Image
          className="w-[220px] lg:w-[300px] "
          priority
          src={logo}
          alt="Follow us on Twitter"
        />
        <span className="sr-only">Refuge du Suffet</span>
      </Link>
    </h2>
  );
};
