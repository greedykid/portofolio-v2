import { MetadataRoute } from 'next';

const SITE_URL = 'https://portofolio-phi-ten-82.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
