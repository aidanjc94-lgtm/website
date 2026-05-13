import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-black uppercase tracking-[0.22em] text-fenland-red">404</p>
      <h1 className="mt-4 text-4xl font-black text-fenland-dark">Page not found</h1>
      <p className="mt-4 text-lg text-fenland-dark/75">Sorry, we could not find that page. Try the homepage or contact the club if a link looks broken.</p>
      <Link className="mt-8 inline-flex rounded-full bg-fenland-purple px-5 py-3 font-bold text-white" href="/">Back to home</Link>
    </section>
  );
}
