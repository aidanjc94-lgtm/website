import type { Policy } from '@/content/types';
import { Badge } from '@/components/ui/Badge';

export function PolicyCard({ policy }: { policy: Policy }) {
  return (
    <article className="rounded-4xl border border-fenland-purple/10 bg-white p-6 shadow-sm">
      <Badge>{policy.status}</Badge>
      <h3 className="mt-4 text-xl font-black text-fenland-dark">{policy.title}</h3>
      <p className="mt-3 leading-7 text-fenland-dark/75">{policy.summary}</p>
      {policy.lastReviewedDate ? <p className="mt-3 text-sm font-semibold text-fenland-dark/60">Last reviewed: {policy.lastReviewedDate}</p> : null}
      {policy.href ? <a className="mt-4 inline-flex font-bold text-fenland-purple underline" href={policy.href}>Open document</a> : null}
    </article>
  );
}
