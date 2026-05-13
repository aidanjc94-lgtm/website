import Link from 'next/link';
import { Badge } from '@/components/ui/Badge';
import { formatDate } from '@/lib/utils';
import type { NewsPost } from '@/content/types';

export function NewsCard({ post }: { post: NewsPost }) {
  return (
    <article className="rounded-4xl border border-fenland-purple/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card motion-reduce:hover:translate-y-0">
      <Badge>{post.category}</Badge>
      <h3 className="mt-4 text-2xl font-black text-fenland-dark">
        <Link className="rounded focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-fenland-red" href={`/news/${post.slug}/`}>
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm font-semibold text-fenland-dark/60">{formatDate(post.date)}</p>
      <p className="mt-4 leading-7 text-fenland-dark/75">{post.summary}</p>
      <Link className="mt-5 inline-flex rounded-full font-bold text-fenland-purple underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-fenland-red" href={`/news/${post.slug}/`}>
        Read update<span className="sr-only">: {post.title}</span>
      </Link>
    </article>
  );
}
