import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Badge } from '@/components/ui/Badge';
import { MarkdownContent } from '@/components/ui/MarkdownContent';
import { getNewsPost, newsPosts } from '@/content/news';
import { formatDate } from '@/lib/utils';

type NewsPostPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: NewsPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsPost(slug);
  return { title: post ? post.title : 'News post' };
}

export default async function NewsPostPage({ params }: NewsPostPageProps) {
  const { slug } = await params;
  const post = getNewsPost(slug);
  if (!post) notFound();

  return (
    <>
      <Breadcrumbs crumbs={[{ label: 'News', href: '/news/' }, { label: post.title }]} />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <Badge>{post.category}</Badge>
        <h1 className="mt-5 text-4xl font-black tracking-tight text-fenland-dark sm:text-6xl">{post.title}</h1>
        <p className="mt-4 font-semibold text-fenland-dark/60">{formatDate(post.date)}</p>
        <p className="mt-6 text-xl leading-9 text-fenland-dark/75">{post.summary}</p>
        <div className="mt-10">
          <MarkdownContent content={post.body} />
        </div>
      </article>
    </>
  );
}
