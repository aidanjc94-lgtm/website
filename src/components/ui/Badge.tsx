import type { ReactNode } from 'react';

export function Badge({ children }: { children: ReactNode }) {
  return <span className="inline-flex rounded-full bg-fenland-soft px-3 py-1 text-xs font-bold uppercase tracking-wide text-fenland-purple">{children}</span>;
}
