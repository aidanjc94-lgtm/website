import eventsData from '../../content/events/events.json';
import type { EventEntry } from './types';

export const events: EventEntry[] = (eventsData as EventEntry[])
  .filter((event) => event.published)
  .sort((a, b) => a.order - b.order)
  .map((event) => ({ ...event, dateLabel: event.date, timeLabel: event.time }));
