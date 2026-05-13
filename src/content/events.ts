import type { EventEntry } from './types';

export const events: EventEntry[] = [
  {
    title: 'Tuesday club run',
    dateLabel: 'Every Tuesday',
    timeLabel: 'Evening — TODO: confirm current time',
    location: 'Wisbech Rugby Club',
    category: 'Club night',
    status: 'Regular',
    summary: 'A regular club evening for adult runners. Session format varies and should be confirmed with the club.',
  },
  {
    title: 'Thursday club run',
    dateLabel: 'Every Thursday',
    timeLabel: 'Evening — TODO: confirm current time',
    location: 'Wisbech Rugby Club',
    category: 'Club night',
    status: 'Regular',
    summary: 'A friendly midweek club session supported by qualified coaches and run leaders.',
  },
  {
    title: 'Frostbite Friendly League fixture',
    dateLabel: 'Seasonal',
    location: 'TODO: fixture venues vary',
    category: 'Race',
    status: 'TODO',
    summary: 'The club participates in the Frostbite Friendly League. Add confirmed fixture dates when available.',
  },
  {
    title: 'Round Norfolk Relay',
    dateLabel: 'Annual relay — TODO: confirm date',
    location: 'Norfolk route',
    category: 'Relay',
    status: 'TODO',
    summary: 'Fenland Running Club enters relay events including Round Norfolk. Confirm team details before publication.',
  },
  {
    title: 'Fenland 10',
    dateLabel: 'TODO: confirm race date',
    location: 'TODO: confirm race venue',
    category: 'Race',
    status: 'TODO',
    summary: 'The club-hosted Fenland 10 race. Key details must be confirmed before launch.',
  },
];
