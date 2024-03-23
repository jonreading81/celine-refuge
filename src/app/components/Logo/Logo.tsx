import Image from 'next/image';
import logo from './logo.svg';
import Link from 'next/link';
import { useLocale } from '@app/hooks/useLocale';

export const Logo = () => {
  const { locales, lang } = useLocale();

  return (
    <h2>
      <Link href={`/${lang === 'fr-fr' ? '' : lang}`} locale={lang}>
        <Image
          className="w-[220px] lg:w-[300px] "
          priority
          src={logo}
          alt="Refuge du Suffet logo"
        />
        <span className="sr-only">Refuge du Suffet</span>
      </Link>
    </h2>
  );
};
