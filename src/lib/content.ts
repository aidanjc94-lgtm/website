import fs from 'node:fs';
import path from 'node:path';
import type {
  BasicPageContent,
  ClubKitDetails,
  EventEntry,
  FAQ,
  Fenland10Details,
  HomeContent,
  NewsPost,
  Person,
  Policy,
  SiteSettings,
} from '@/content/types';

const contentRoot = path.join(process.cwd(), 'content');

function readJsonFile<T>(filePath: string): T {
  return JSON.parse(fs.readFileSync(filePath, 'utf8')) as T;
}

function readJsonCollection<T extends { published?: boolean }>(folder: string): T[] {
  const directory = path.join(contentRoot, folder);

  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith('.json'))
    .sort()
    .map((file) => readJsonFile<T>(path.join(directory, file)))
    .filter((item) => item.published !== false);
}

function parseFrontmatterValue(value: string) {
  const trimmed = value.trim();

  if (trimmed === 'true') return true;
  if (trimmed === 'false') return false;
  if (trimmed === 'null') return undefined;
  return trimmed.replace(/^['"]|['"]$/g, '');
}

function readMarkdownPost(filePath: string): NewsPost {
  const raw = fs.readFileSync(filePath, 'utf8');
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!match) {
    throw new Error(`News post is missing frontmatter: ${filePath}`);
  }

  const frontmatter = Object.fromEntries(
    match[1]
      .split('\n')
      .filter((line) => line.trim() && !line.trim().startsWith('#'))
      .map((line) => {
        const separator = line.indexOf(':');
        const key = line.slice(0, separator).trim();
        const value = line.slice(separator + 1);
        return [key, parseFrontmatterValue(value)];
      }),
  ) as Partial<NewsPost>;

  const fallbackSlug = path.basename(filePath, path.extname(filePath)).replace(/^\d{4}-\d{2}-\d{2}-/, '');

  return {
    slug: frontmatter.slug || fallbackSlug,
    title: frontmatter.title || 'TODO: add news title',
    summary: frontmatter.summary || 'TODO: add news summary',
    date: frontmatter.date || '2026-05-13',
    category: frontmatter.category || 'TODO',
    featured: Boolean(frontmatter.featured),
    published: frontmatter.published !== false,
    image: frontmatter.image,
    imageAlt: frontmatter.imageAlt,
    body: match[2].trim(),
  } as NewsPost;
}

export function getSiteSettings(): SiteSettings {
  return readJsonFile<SiteSettings>(path.join(contentRoot, 'settings/site.json'));
}

export function getHomeContent(): HomeContent {
  return readJsonFile<HomeContent>(path.join(contentRoot, 'pages/home.json'));
}

export function getPageContent<T extends BasicPageContent>(name: string): T {
  return readJsonFile<T>(path.join(contentRoot, `pages/${name}.json`));
}

export function getFenland10Content(): Fenland10Details {
  return readJsonFile<Fenland10Details>(path.join(contentRoot, 'pages/fenland-10.json'));
}

export function getClubKitContent(): ClubKitDetails {
  return readJsonFile<ClubKitDetails>(path.join(contentRoot, 'pages/club-kit.json'));
}

export function getNewsPosts({ includeUnpublished = false }: { includeUnpublished?: boolean } = {}): NewsPost[] {
  const directory = path.join(contentRoot, 'news');

  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .map((file) => readMarkdownPost(path.join(directory, file)))
    .filter((post) => includeUnpublished || post.published !== false)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getNewsPost(slug: string) {
  return getNewsPosts({ includeUnpublished: true }).find((post) => post.slug === slug && post.published !== false);
}

export function getEvents(): EventEntry[] {
  return readJsonCollection<EventEntry>('events');
}

export function getPolicies(): Policy[] {
  return readJsonCollection<Policy>('policies');
}

export function getFaqs(): FAQ[] {
  return readJsonCollection<FAQ>('faqs');
}

export function getCommitteeMembers(): Person[] {
  return readJsonCollection<Person>('committee');
}

export function getCoaches(): Person[] {
  return readJsonCollection<Person>('coaches');
}

export function getRunLeaders(): Person[] {
  return readJsonCollection<Person>('run-leaders');
}

export function getCoachesAndRunLeaders(): Person[] {
  return [...getCoaches(), ...getRunLeaders()];
}
