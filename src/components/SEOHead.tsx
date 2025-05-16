// src/components/SEOHead.tsx
import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  url?: string;
}

const SEOHead = ({
  title = 'Free GUID Generator Online – Create Unique GUIDs Instantly | EasyGUID',
  description = 'Generate globally unique identifiers (GUIDs) instantly with EasyGUID. A fast, free, and secure online GUID generator with copy and history features. No sign-up needed.',
  ogTitle = 'Free GUID Generator Online – Create Unique GUIDs Instantly | EasyGUID',
  ogDescription = 'Generate globally unique identifiers (GUIDs) instantly with EasyGUID. A fast, free, and secure online GUID generator with copy and history features. No sign-up needed.',
  ogImage = 'https://res.cloudinary.com/dqqarxqbu/image/upload/v1746107614/Screenshot_2025-05-01_at_14.53.10_fvlixj.png',
  twitterCard = 'summary_large_image',
  url = 'https://www.easyguid.co.uk',
}: SEOHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={ogImage} />
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default SEOHead;