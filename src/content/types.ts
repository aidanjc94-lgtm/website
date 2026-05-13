export type ISODate = `${number}-${number}-${number}`;

export type Link = {
  label: string;
  href: string;
  note?: string;
  order?: number;
  published?: boolean;
};

export type NewsPost = {
  slug: string;
  title: string;
  summary: string;
  date: ISODate;
  author?: string;
  category: 'Club news' | 'Training' | 'Fenland 10' | 'Couch to 5K' | 'Race report' | 'TODO';
  mainImage?: string;
  imageAlt?: string;
  published: boolean;
  featured?: boolean;
  content: string[];
};

export type EventEntry = {
  title: string;
  date: string;
  dateLabel: string;
  time?: string;
  timeLabel?: string;
  location: string;
  category: 'Club night' | 'Race' | 'Relay' | 'Social' | 'Course' | 'TODO';
  summary: string;
  link?: string;
  status?: 'Confirmed' | 'Regular' | 'TODO';
  published: boolean;
  featured?: boolean;
  order: number;
};

export type Policy = {
  title: string;
  summary: string;
  documentLink?: string;
  href?: string;
  policyCategory: string;
  status: string;
  lastReviewedDate?: string;
  published: boolean;
  order: number;
};

export type FAQ = {
  question: string;
  answer: string;
  category: 'Joining' | 'Training' | 'Couch to 5K' | 'Fenland 10' | 'Welfare' | 'Kit' | 'TODO';
  published: boolean;
  order: number;
};

export type Person = {
  name?: string;
  role: string;
  description?: string;
  note?: string;
  image?: string;
  imageAlt?: string;
  email?: string;
  published?: boolean;
  order?: number;
  isPlaceholder?: boolean;
};

export type NormalisedPerson = {
  name: string;
  role: string;
  description: string;
  image?: string;
  imageAlt?: string;
  email?: string;
  published: boolean;
  order: number;
};

export type Fenland10Details = {
  title: string;
  summary: string;
  details: Array<{ label: string; value: string; order?: number; published?: boolean }>;
  links: Link[];
};

export type ClubKitDetails = {
  intro: string;
  orderInformation: string;
  contactOrSupplierNote: string;
  items: Array<{ name: string; description: string; image?: string; imageAlt?: string; published: boolean; order: number }>;
  ordering: string;
};
