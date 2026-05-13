import fs from 'node:fs';
import path from 'node:path';
import type { NewsPost } from './types';

const newsDirectory = path.join(process.cwd(), 'content/news');

type NewsFrontmatter = Omit<NewsPost, 'content' | 'published'> & { published?: boolean };

function parseFrontmatter(fileContent: string): { data: Record<string, string | boolean>; body: string } {
  const match = fileContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!match) {
    return { data: {}, body: fileContent };
  }

  const data = Object.fromEntries(
    match[1].split('\n').filter(Boolean).map((line) => {
      const [key, ...valueParts] = line.split(':');
      const rawValue = valueParts.join(':').trim();
      const value = rawValue === 'true' ? true : rawValue === 'false' ? false : rawValue.replace(/^['"]|['"]$/g, '');
      return [key.trim(), value];
    }),
  );

  return { data, body: match[2] };
}

function getAllNewsPosts(): NewsPost[] {
  if (!fs.existsSync(newsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(newsDirectory)
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const fileContent = fs.readFileSync(path.join(newsDirectory, fileName), 'utf8');
      const { data, body } = parseFrontmatter(fileContent);
      const frontmatter = data as NewsFrontmatter;

      return {
        slug: frontmatter.slug || fileName.replace(/\.md$/, ''),
        title: frontmatter.title,
        summary: frontmatter.summary,
        date: frontmatter.date,
        author: frontmatter.author,
        category: frontmatter.category,
        mainImage: frontmatter.mainImage,
        imageAlt: frontmatter.imageAlt,
        published: frontmatter.published ?? true,
        featured: frontmatter.featured ?? false,
        content: body.split('\n\n').map((paragraph) => paragraph.trim()).filter(Boolean),
      } as NewsPost;
    })
    .filter((post) => post.published)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export const newsPosts: NewsPost[] = getAllNewsPosts();
export const featuredNewsPosts: NewsPost[] = newsPosts.filter((post) => post.featured);

export function getNewsPost(slug: string) {
  return newsPosts.find((post) => post.slug === slug);
}
