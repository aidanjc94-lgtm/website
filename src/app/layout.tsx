import type { Metadata } from 'next';
import './globals.css';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { site } from '@/content/site';

export const metadata: Metadata = {
  title: {
    default: 'Fenland Running Club',
    template: '%s | Fenland Running Club',
  },
  description: site.description,
  metadataBase: new URL('https://fenland-running-club.github.io'),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body className="font-sans antialiased">
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
