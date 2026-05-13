import Link from 'next/link';
import { site } from '@/content/site';
import { footerNavigation } from '@/lib/pageVisibility';

export function SiteFooter() {
  return (
    <footer className="bg-fenland-dark text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div>
          <h2 className="text-3xl font-black">Fenland Running Club</h2>
          <p className="mt-4 max-w-xl leading-7 text-white/75">A friendly adult running club based in Wisbech, Cambridgeshire. Affiliated to England Athletics.</p>
          <p className="mt-4 text-sm text-white/65">© {new Date().getFullYear()} Fenland Running Club. TODO: confirm copyright wording.</p>
        </div>
        <div>
          <h3 className="font-black">Explore</h3>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {footerNavigation.map((item) => (
              <Link className="rounded-lg py-1 text-sm font-semibold text-white/75 hover:text-white focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-fenland-red" href={item.href} key={item.href}>{item.label}</Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/65">Contact: <a className="underline" href={`mailto:${site.email}`}>{site.email}</a> — TODO: replace with approved club email.</p>
        </div>
      </div>
    </footer>
  );
}
