import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { GoogleAnalytics } from '@next/third-parties/google';

import './globals.css';
import { PageTracker } from '../../src';
const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'React Page Tracker',
  authors: [{ name: 'typeart.cc' }, { url: 'https://blog.typeart.cc/', name: 'Hsuan-Yi, Chou' }],
  description:
    'A lightweight, zero-dependency library providing accurate navigation tracking, fixed document.referrer value, and complete history support for React frameworks.',
  formatDetection: {
    telephone: false,
  },
  keywords: [
    'react',
    'page-tracker',
    'hooks',
    "track browser's back-and-forward buttons",
    'Fix document.referrer',
  ],
  other: {
    'google-site-verification': 'q2TjtYRJbnG5q8Am34DYea1AL_VmYHOUOLlKQGgamGQ',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-TJ5CFTJVVC" />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <PageTracker />
        {children}
      </body>
    </html>
  );
}
