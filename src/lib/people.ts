import type { NormalisedPerson, Person } from '@/content/types';

const missingNameLabel = 'TODO: Name required';

export function normalisePerson(person: Person): NormalisedPerson {
  const name = person.name?.trim() || missingNameLabel;
  const description = person.description?.trim() || person.note?.trim() || '';

  return {
    name,
    role: person.role,
    description,
    image: person.image || undefined,
    imageAlt: person.imageAlt || (person.image ? `${name}, ${person.role}` : undefined),
    email: person.email || undefined,
    published: person.published ?? true,
    order: person.order ?? 0,
  };
}

export function normalisePeople(people: Person[]): NormalisedPerson[] {
  return people.map(normalisePerson).filter((person) => person.published).sort((a, b) => a.order - b.order);
}
