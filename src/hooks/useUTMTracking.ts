import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useUTMTracking = () => {
  const location = useLocation();
  const [utmParams, setUtmParams] = useState<string>('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const utms: string[] = [];

    // Capturar todos os parâmetros UTM
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    
    utmKeys.forEach(key => {
      const value = searchParams.get(key);
      if (value) {
        utms.push(`${key}=${encodeURIComponent(value)}`);
      }
    });

    setUtmParams(utms.length > 0 ? utms.join('&') : '');
  }, [location.search]);

  const addUTMToUrl = (url: string): string => {
    if (!utmParams || !url) return url;
    
    try {
      const separator = url.includes('?') ? '&' : '?';
      return `${url}${separator}${utmParams}`;
    } catch (error) {
      console.error('Erro ao adicionar UTMs:', error);
      return url;
    }
  };

  return { utmParams, addUTMToUrl };
};