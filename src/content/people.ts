import { getCoaches, getCoachesAndRunLeaders, getCommitteeMembers, getRunLeaders } from '@/lib/content';

export const committeeMembers = getCommitteeMembers();
export const coaches = getCoaches();
export const runLeaders = getRunLeaders();
export const coachesAndRunLeaders = getCoachesAndRunLeaders();
