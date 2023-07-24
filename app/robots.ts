import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://careernavigator.vercel.app/sitemap.xml',
  }
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: {
    follow: true,
    googleBot: {
      index: true,
      noimageindex: false,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}