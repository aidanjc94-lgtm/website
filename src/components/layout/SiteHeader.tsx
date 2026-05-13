import Image from 'next/image';
import Link from 'next/link';
import { navigation, site } from '@/content/site';
import { CTAButton } from '@/components/ui/CTAButton';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-fenland-purple/10 bg-white/95 backdrop-blur">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-fenland-red focus:px-4 focus:py-2 focus:font-bold focus:text-white">
        Skip to content
      </a>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="flex items-center gap-3 rounded focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-fenland-red">
          <Image src={site.logo} alt="Fenland Running Club logo" width={52} height={52} className="h-12 w-12 object-contain" />
          <span className="text-base font-black leading-tight text-fenland-dark">Fenland<br />Running Club</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {navigation.slice(0, 9).map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm font-bold text-fenland-dark hover:bg-fenland-soft focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-fenland-red">
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:block"><CTAButton href="/contact/" variant="secondary">Contact</CTAButton></div>
        <details className="relative lg:hidden">
          <summary className="list-none rounded-full bg-fenland-purple px-4 py-3 text-sm font-bold text-white focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-fenland-red">Menu</summary>
          <div className="absolute right-0 mt-3 w-72 rounded-3xl border border-fenland-purple/10 bg-white p-3 shadow-card">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-2xl px-4 py-3 font-bold text-fenland-dark hover:bg-fenland-soft focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-fenland-red">
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}
