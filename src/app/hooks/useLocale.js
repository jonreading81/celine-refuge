import { useContext } from 'react';
import LocaleContext from '@app/context/LocaleContext';

const localeLabels = {
  'en-gb': 'English',
  'fr-fr': 'French',
};

export const useLocale = () => {
  const { lang, ...context } = useContext(LocaleContext);
  const locales = context.locales.map((locale) => ({
    ...locale,
    lang_name: localeLabels[locale.lang],
  }));

  return {
    lang,
    locales,
  };
};
