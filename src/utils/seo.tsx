import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogImage?: string;
  schema?: object;
}

export const useSEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = 'https://impulsionesocial.com/og-image.jpg',
  schema,
}: SEOProps) => {
  const location = useLocation();
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://impulsionesocial.com';
  const fullUrl = canonical || `${siteUrl}${location.pathname}`;

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('last-modified', new Date().toISOString().split('T')[0]);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:type', 'website', true);

    // Twitter tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:url', fullUrl);
    updateMetaTag('twitter:image', ogImage);

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = fullUrl;

    // Add or update Schema.org JSON-LD
    if (schema) {
      let schemaScript = document.querySelector('script[type="application/ld+json"]');
      
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      
      schemaScript.textContent = JSON.stringify(schema);
    }

    // Cleanup function
    return () => {
      // Remove schema script on unmount
      const schemaScript = document.querySelector('script[type="application/ld+json"]');
      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, [title, description, keywords, fullUrl, ogImage, schema]);
};

// Helper function to generate product schema
export const generateProductSchema = (
  name: string,
  description: string,
  platform: string,
  offers: Array<{ price: string; quantity: string }>
) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://impulsionesocial.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${name} - ${platform}`,
    description,
    brand: {
      '@type': 'Brand',
      name: 'Impulsione Social',
    },
    offers: offers.map((offer) => ({
      '@type': 'Offer',
      price: offer.price.replace('R$', '').replace(',', '.').trim(),
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
      description: `${offer.quantity} ${name}`,
    })),
  };
};

// Helper function to generate service schema
export const generateServiceSchema = (
  serviceName: string,
  description: string,
  platform: string
) => {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://impulsionesocial.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${serviceName} para ${platform}`,
    description,
    provider: {
      '@type': 'Organization',
      name: 'Impulsione Social',
      url: siteUrl,
    },
    areaServed: 'BR',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: siteUrl,
    },
  };
};

// Helper function to generate FAQ schema
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};