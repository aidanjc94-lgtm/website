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
  published?: boolean;
  image?: string;
  imageAlt?: string;
  body: string;
};

export type EventEntry = {
  title: string;
  dateLabel: string;
  timeLabel?: string;
  location: string;
  category: 'Club night' | 'Race' | 'Relay' | 'Social' | 'Course' | 'TODO';
  summary: string;
  status?: 'Confirmed' | 'Regular' | 'TODO';
  published?: boolean;
};

export type Policy = {
  title: string;
  summary: string;
  status: 'TODO' | 'Current';
  href?: string;
  published?: boolean;
};

export type FAQ = {
  question: string;
  answer: string;
  category: 'Joining' | 'Training' | 'Couch to 5K' | 'Fenland 10' | 'Welfare' | 'Kit' | 'TODO';
  published?: boolean;
};

export type Person = {
  name: string;
  role: string;
  note?: string;
  published?: boolean;
};

export type Fenland10Details = {
  title: string;
  summary: string;
  details: Array<{ label: string; value: string }>;
  links: Link[];
  todo?: string;
};

export type ClubKitDetails = {
  intro: string;
  items: Array<{ name: string; note: string }>;
  ordering: string;
  todo?: string;
};

export type SiteSettings = {
  name: string;
  shortName: string;
  description: string;
  email: string;
  venue: string;
  location: string;
  meetingSummary: string;
  logo: string;
  socialLinks: Link[];
};

export type HomeContent = {
  eyebrow: string;
  title: string;
  intro: string;
  findYourPaceTitle: string;
  findYourPaceIntro: string;
  trainingTitle: string;
  trainingIntro: string;
  fenland10Intro: string;
  couchTo5kIntro: string;
};

export type BasicPageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  todo?: string;
  [key: string]: string | boolean | undefined;
};
