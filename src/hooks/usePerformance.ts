
import { useEffect } from 'react';

export const usePerformance = () => {
  useEffect(() => {
    // Preload de imagens críticas após o carregamento inicial
    const preloadCriticalImages = () => {
      const criticalImages = [
        '/images/medias/instagram.png',
        '/images/medias/tiktok.png',
        '/images/medias/facebook.png',
        '/images/medias/youtube.png'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Executar após o carregamento inicial
    if (document.readyState === 'complete') {
      preloadCriticalImages();
    } else {
      window.addEventListener('load', preloadCriticalImages);
      return () => window.removeEventListener('load', preloadCriticalImages);
    }
  }, []);

  // Função para lazy load de imagens
  const lazyLoadImage = (src: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(src);
      img.onerror = reject;
      img.src = src;
    });
  };

  return { lazyLoadImage };
};

export default usePerformance;
