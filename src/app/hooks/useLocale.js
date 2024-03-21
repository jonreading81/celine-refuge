import { useContext } from 'react';
import LocaleContext from '@app/context/LocaleContext';

export const useLocale = () => useContext(LocaleContext);
