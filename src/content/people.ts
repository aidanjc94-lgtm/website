import committeeData from '../../content/people/committee.json';
import coachesData from '../../content/people/coaches.json';
import runLeadersData from '../../content/people/run-leaders.json';
import type { Person } from './types';

const sortPeople = (people: Person[]) => [...people].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

export const committeeMembers: Person[] = sortPeople(committeeData as Person[]);
export const coaches: Person[] = sortPeople(coachesData as Person[]);
export const runLeaders: Person[] = sortPeople(runLeadersData as Person[]);
export const coachesAndRunLeaders: Person[] = [...coaches, ...runLeaders];
