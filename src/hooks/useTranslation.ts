import { useCallback } from 'react';
import enTranslations from '../locales/en.json';



export const useTranslation = () => {
  const t = useCallback((key: string): string => {
    const keys = key.split('.');
    let current: any = enTranslations;
    
    for (const k of keys) {
      if (current[k] === undefined) {
        return key;
      }
      current = current[k];
    }
    
    return current;
  }, []);

  return { t };
};
