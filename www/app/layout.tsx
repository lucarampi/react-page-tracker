import type { Metadata } from 'next';
import localFont from 'next/font/local';
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
  description:
    'react-page-tracker is a react package designed for page tracking. It accurately determines whether the current page is the first or last, fixes incorrect document.referrer for precise tracking, and provides a complete `history` browsing record. It also identifies if users navigated via browser back/forward buttons or clicked links. Fully compatible with Next.js, Remix, TanStack Query, and React Router.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <PageTracker />
        {children}
      </body>
    </html>
  );
}
