import Image from 'next/image';
import logo from './logo.svg';
import Link from 'next/link';
import { useLocale } from '@app/hooks/useLocale';
import { usePageData } from '@app/hooks/usePageData';

export const Logo = () => {
  const { locales, lang } = useLocale();
  const { settings } = usePageData();

  return (
    <h1>
      <Link href={`/${lang === 'fr-fr' ? '' : lang}`}>
        <Image
          className="w-[180px] lg:w-[220px]"
          priority
          src={logo}
          alt="Refuge du Suffet logo"
        />
        <span className="sr-only">{settings.data.site_title}</span>
      </Link>
    </h1>
  );
};
