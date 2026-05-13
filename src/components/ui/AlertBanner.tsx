import type { ReactNode } from 'react';

export function AlertBanner({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-3xl border-2 border-dashed border-fenland-red/40 bg-white p-5 text-sm font-medium text-fenland-dark shadow-sm">
      <strong className="text-fenland-red">TODO:</strong> {children}
    </div>
  );
}
