export type EventType = 'Training' | 'Beginners' | 'Race' | 'Social' | 'Meeting';

export interface ClubEvent {
  title: string;
  type: EventType;
  date: string;
  time: string;
  location: string;
  summary: string;
}

export interface NewsPost {
  title: string;
  date: string;
  category: string;
  summary: string;
  slug: string;
}

export interface PolicyItem {
  title: string;
  status: string;
  summary: string;
}
