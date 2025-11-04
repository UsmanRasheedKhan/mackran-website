import { DefaultSeoProps } from 'next-seo';

export const DEFAULT_SEO: DefaultSeoProps = {
  title: 'Mackran Real Estate — Luxury Properties UAE',
  description: 'Mackran Real Estate (Mackran Properties) — premium UAE real estate. Discover curated villas, apartments and investment-grade listings across Dubai, Abu Dhabi and the UAE.',
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://your-domain.ae',
    images: [
      { url: '/og-image.jpg', width: 1200, height: 630, alt: 'Mackran Real Estate' }
    ]
  },
  twitter: {
    handle: '@mackran',
    site: '@mackran',
    cardType: 'summary_large_image'
  }
};
