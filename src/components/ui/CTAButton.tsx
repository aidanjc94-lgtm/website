import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
};

export function CTAButton({ href, children, variant = 'primary', className }: CTAButtonProps) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('TODO');
  const classes = cn(
    'inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-fenland-red',
    variant === 'primary' && 'bg-fenland-purple text-white hover:bg-fenland-dark',
    variant === 'secondary' && 'bg-fenland-red text-white hover:bg-[#b80004]',
    variant === 'outline' && 'border-2 border-fenland-purple bg-white text-fenland-purple hover:bg-fenland-soft',
    variant === 'ghost' && 'text-fenland-purple underline-offset-4 hover:underline',
    className,
  );

  if (isExternal) {
    return (
      <a className={classes} href={href.startsWith('TODO') ? '#' : href} aria-disabled={href.startsWith('TODO') || undefined}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
