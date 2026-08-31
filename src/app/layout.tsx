import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Fira_Code } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import Layout from '@/common/components/layouts';
import { ThemeProvider } from '@/common/context/ThemeContext';
import { AUTHOR_NAME, SITE_NAME, SITE_URL } from '@/common/constant/app';
import './globals.css';

const jakartaSans = Plus_Jakarta_Sans({
  variable: '--jakartaSans-font',
  subsets: ['latin'],
  display: 'fallback',
  weight: ['400', '500', '600', '700', '800'],
});

const firaCode = Fira_Code({
  variable: '--firaCode-font',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Rizki Arbiansyah | Web Developer & IT Support',
    template: '%s | Rizki Arbiansyah',
  },
  description:
    'Portofolio Rizki Arbiansyah - Lulusan S1 Sistem Informasi Universitas Gunadarma dengan keahlian Web Development (Laravel, MySQL, Tailwind CSS) dan IT Support & Networking.',
  keywords: [
    'Rizki Arbiansyah',
    'Web Developer',
    'IT Support',
    'Laravel',
    'MySQL',
    'Tailwind CSS',
    'Universitas Gunadarma',
    'Portofolio',
  ],
  authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
  creator: AUTHOR_NAME,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'Rizki Arbiansyah | Web Developer & IT Support',
    description:
      'Portofolio Rizki Arbiansyah - Web Development, IT Support, dan Proyek Sistem Informasi.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Rizki Arbiansyah Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rizki Arbiansyah | Web Developer & IT Support',
    description:
      'Portofolio Rizki Arbiansyah - Web Development, IT Support, dan Proyek Sistem Informasi.',
    images: ['/opengraph-image'],
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
};

export const viewport: Viewport = {
  themeColor: '#121212',
};

// Terapkan tema tersimpan sebelum paint pertama agar tidak flash mode terang
const themeInitScript = `
try {
  var t = localStorage.getItem('portfolio-theme');
  document.documentElement.setAttribute('class', t === 'light' ? 'light' : 'dark');
} catch (e) {
  document.documentElement.setAttribute('class', 'dark');
}
`;

// Structured data untuk SEO: Personal Knowledge Panel di Google
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: AUTHOR_NAME,
  url: SITE_URL,
  jobTitle: 'Web Developer & IT Support',
  description:
    'Lulusan S1 Sistem Informasi Universitas Gunadarma dengan keahlian Web Development (Laravel, MySQL, Tailwind CSS) dan IT Support & Networking.',
  sameAs: [
    'https://github.com/greedykid',
    'https://linkedin.com/in/rizkiarbiansyah',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakartaSans.variable} ${firaCode.variable} font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
