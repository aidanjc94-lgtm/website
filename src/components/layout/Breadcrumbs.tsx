import Link from 'next/link';

type Crumb = { label: string; href?: string };

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="mx-auto max-w-7xl px-4 py-4 text-sm sm:px-6 lg:px-8" aria-label="Breadcrumb">
      <ol className="flex flex-wrap gap-2 text-fenland-dark/70">
        <li><Link className="font-bold text-fenland-purple underline-offset-4 hover:underline" href="/">Home</Link></li>
        {crumbs.map((crumb) => (
          <li key={crumb.label} className="before:mr-2 before:content-['/']">
            {crumb.href ? <Link className="font-bold text-fenland-purple underline-offset-4 hover:underline" href={crumb.href}>{crumb.label}</Link> : <span>{crumb.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
