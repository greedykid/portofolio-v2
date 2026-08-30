import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Fira_Code } from 'next/font/google';

import Layout from '@/common/components/layouts';
import { ThemeProvider } from '@/common/context/ThemeContext';
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
  title: 'Rizki Arbiansyah | Web Developer & IT Support',
  description:
    'Portofolio Rizki Arbiansyah - Lulusan S1 Sistem Informasi Universitas Gunadarma dengan keahlian Web Development (Laravel, MySQL, Tailwind CSS) dan IT Support & Networking.',
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
      </body>
    </html>
  );
}
