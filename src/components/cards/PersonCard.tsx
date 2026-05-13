import Image from 'next/image';
import type { NormalisedPerson } from '@/content/types';

export function PersonCard({ person }: { person: NormalisedPerson }) {
  return (
    <article className="rounded-2xl bg-fenland-soft p-4">
      {person.image && (
        <Image
          src={person.image}
          alt={person.imageAlt || person.name}
          width={96}
          height={96}
          className="mb-4 h-16 w-16 rounded-full object-cover"
        />
      )}
      <h4 className="text-lg font-black text-fenland-dark">{person.name}</h4>
      <p className="mt-1 font-bold text-fenland-purple">{person.role}</p>
      {person.description && <p className="mt-2 text-sm text-fenland-dark/70">{person.description}</p>}
    </article>
  );
}
