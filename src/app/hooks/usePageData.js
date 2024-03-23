import { useContext } from 'react';
import PageDataContext from '@app/context/PageDataContext';

export const usePageData = () => useContext(PageDataContext);
