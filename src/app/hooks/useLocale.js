import { useContext } from 'react';
import LocaleContext from '@app/context/LocaleContext';

const localeLabels = {
  'en-gb': 'English',
  'fr-fr': 'Francais',
};

export const useLocale = () => {
  const { lang, ...context } = useContext(LocaleContext);
  const locales = context.locales.map(({ lang_name, ...locale }) => ({
    ...locale,
    lang_name: localeLabels[locale.lang] ?? lang_name,
  }));

  return {
    lang,
    locales,
  };
};
