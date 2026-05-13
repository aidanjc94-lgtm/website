import { Badge } from '@/components/ui/Badge';
import type { EventEntry } from '@/content/types';

export function EventCard({ event }: { event: EventEntry }) {
  return (
    <article className="rounded-4xl border border-fenland-purple/10 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center gap-3">
        <Badge>{event.category}</Badge>
        {event.status ? <span className="text-xs font-bold uppercase tracking-wide text-fenland-dark/55">{event.status}</span> : null}
      </div>
      <h3 className="mt-4 text-2xl font-black text-fenland-dark">{event.title}</h3>
      <dl className="mt-4 space-y-2 text-sm text-fenland-dark/75">
        <div><dt className="inline font-bold">Date: </dt><dd className="inline">{event.dateLabel}</dd></div>
        {event.timeLabel ? <div><dt className="inline font-bold">Time: </dt><dd className="inline">{event.timeLabel}</dd></div> : null}
        <div><dt className="inline font-bold">Location: </dt><dd className="inline">{event.location}</dd></div>
      </dl>
      <p className="mt-4 leading-7 text-fenland-dark/75">{event.summary}</p>
    </article>
  );
}
