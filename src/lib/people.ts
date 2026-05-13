import type { NormalisedPerson, Person } from '@/content/types';

const missingNameLabel = 'TODO: Name required';

export function normalisePerson(person: Person): NormalisedPerson {
  const name = person.name?.trim() || missingNameLabel;
  const description = person.description?.trim() || person.note?.trim() || '';

  return {
    name,
    role: person.role,
    description,
    image: person.image,
    imageAlt: person.imageAlt || (person.image ? `${name}, ${person.role}` : undefined),
    published: person.published ?? true,
  };
}

export function normalisePeople(people: Person[]): NormalisedPerson[] {
  return people.map(normalisePerson).filter((person) => person.published);
}
