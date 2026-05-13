import type { Person } from '@/content/types';

type PersonCardProps = {
  person: Person;
};

export function PersonCard({ person }: PersonCardProps) {
  const name = person.name.trim() || 'TODO';
  const description = person.note || 'TODO: add a short approved description.';

  return (
    <article className="rounded-3xl border border-fenland-purple/10 bg-white p-5 shadow-sm">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-fenland-red">{person.role}</p>
      <h4 className="mt-3 text-2xl font-black text-fenland-dark">{name}</h4>
      <p className="mt-3 leading-7 text-fenland-dark/75">{description}</p>
    </article>
  );
}
