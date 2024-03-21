'use client';
// ./src/components/LanguageSwitcher.tsx
import { Select, Option } from '@material-tailwind/react';
import { PrismicNextLink } from '@prismicio/next';

import { Slice } from '@app/components/Slice';
import { useLocale } from '@app/hooks/useLocale';

const localeLabels = {
  'en-gb': 'English',
  'fr-fr': 'French',
};

const localeFlags = {
  'en-gb': 'gb  ',
  'fr-fr': 'fr',
};

const FlagIcon = ({ countryCode }) => {
  return (
    <span
      className={`w-8 h-5 block bg-contain bg-no-repeat fi-${countryCode}`}
    />
  );
};

export const LanguageSwitcher = () => {
  const { locales, lang } = useLocale();
  const selected = locales.find((locale) => (locale.lang = lang));

  return (
    <Select label="Select Language" value={localeLabels[selected.lang]}>
      {locales.map((locale) => (
        <PrismicNextLink
          key={locale.lang}
          className="flex items-center mb-4 hover:bg-red"
          href={locale.url}
          locale={locale.lang}
          aria-label={`Change language to ${locale.lang_name}`}
        >
          <FlagIcon countryCode={localeFlags[locale.lang]} />
          <span className="text-sm ml-1"> {localeLabels[locale.lang]}</span>
        </PrismicNextLink>
      ))}
    </Select>
  );
};
