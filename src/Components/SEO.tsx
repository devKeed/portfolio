import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  pathname?: string;
}

const SEO = ({
  title = 'Fortune Adebiyi | Portfolio',
  description = 'Fortune Adebiyi\'s professional portfolio showcasing skills, projects, and experiences in design, development, and more.',
  keywords = 'Fortune Adebiyi, web developer, portfolio, projects, skills, design, Fortune, Adebiyi',
  ogImage = '/public/images/fortune_image.webp',
  pathname = '',
}: SEOProps) => {
  
  const url = typeof window !== 'undefined' ? window.location.origin : '';
  const fullUrl = `${url}${pathname}`;
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const metaTags = {
      description,
      keywords,
      'og:title': title,
      'og:description': description,
      'og:image': ogImage,
      'og:url': fullUrl,
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': ogImage,
      'twitter:url': fullUrl,
    };
    
    // Set or update meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      let metaTag = document.querySelector(`meta[property="${name}"]`) || 
                   document.querySelector(`meta[name="${name}"]`);
      
      if (!metaTag) {
        metaTag = document.createElement('meta');
        if (name.startsWith('og:') || name.startsWith('twitter:')) {
          metaTag.setAttribute('property', name);
        } else {
          metaTag.setAttribute('name', name);
        }
        document.head.appendChild(metaTag);
      }
      
      metaTag.setAttribute('content', content);
    });
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);
    
  }, [title, description, keywords, ogImage, fullUrl]);
  
  return null; // This component doesn't render anything
};

export default SEO;