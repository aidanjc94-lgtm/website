export type ISODate = `${number}-${number}-${number}`;

export type Link = {
  label: string;
  href: string;
  note?: string;
};

export type NewsPost = {
  slug: string;
  title: string;
  summary: string;
  date: ISODate;
  category: 'Club news' | 'Training' | 'Fenland 10' | 'Couch to 5K' | 'Race report' | 'TODO';
  featured?: boolean;
  content: string[];
};

export type EventEntry = {
  title: string;
  dateLabel: string;
  timeLabel?: string;
  location: string;
  category: 'Club night' | 'Race' | 'Relay' | 'Social' | 'Course' | 'TODO';
  summary: string;
  status?: 'Confirmed' | 'Regular' | 'TODO';
};

export type Policy = {
  title: string;
  summary: string;
  status: 'TODO' | 'Current';
  href?: string;
};

export type FAQ = {
  question: string;
  answer: string;
  category: 'Joining' | 'Training' | 'Couch to 5K' | 'Fenland 10' | 'Welfare' | 'Kit' | 'TODO';
};

export type Person = {
  name?: string;
  role: string;
  description?: string;
  note?: string;
  image?: string;
  imageAlt?: string;
  published?: boolean;
  isPlaceholder?: boolean;
};

export type NormalisedPerson = {
  name: string;
  role: string;
  description: string;
  image?: string;
  imageAlt?: string;
  published: boolean;
};

export type Fenland10Details = {
  title: string;
  summary: string;
  details: Array<{ label: string; value: string }>;
  links: Link[];
};

export type ClubKitDetails = {
  intro: string;
  items: Array<{ name: string; note: string }>;
  ordering: string;
};
