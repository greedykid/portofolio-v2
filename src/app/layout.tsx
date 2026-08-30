import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Fira_Code } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import Layout from '@/common/components/layouts';
import { ThemeProvider } from '@/common/context/ThemeContext';
import './globals.css';

const SITE_URL = 'https://portofolio-phi-ten-82.vercel.app';

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
  authors: [{ name: 'Rizki Arbiansyah', url: SITE_URL }],
  creator: 'Rizki Arbiansyah',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: SITE_URL,
    siteName: 'Rizki Arbiansyah Portfolio',
    title: 'Rizki Arbiansyah | Web Developer & IT Support',
    description:
      'Portofolio Rizki Arbiansyah - Web Development, IT Support, dan Proyek Sistem Informasi.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rizki Arbiansyah | Web Developer & IT Support',
    description:
      'Portofolio Rizki Arbiansyah - Web Development, IT Support, dan Proyek Sistem Informasi.',
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
  },
};

export const viewport: Viewport = {
  themeColor: '#121212',
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
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
