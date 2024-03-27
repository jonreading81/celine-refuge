import Image from 'next/image';
import logo from './logo.svg';
import Link from 'next/link';
import { useLocale } from '@app/hooks/useLocale';

export const Logo = () => {
  const { locales, lang } = useLocale();

  return (
    <h2>
      <Link href={`/${lang === 'fr-fr' ? '' : lang}`}>
        <Image
          className="w-[180px] lg:w-[220px]"
          priority
          src={logo}
          alt="Refuge du Suffet logo"
        />
        <span className="sr-only">Refuge du Suffet</span>
      </Link>
    </h2>
  );
};
