import type { ReactNode } from 'react';
import { CTAButton } from '@/components/ui/CTAButton';

type FeatureCardProps = {
  title: string;
  text: string;
  icon?: ReactNode;
  href?: string;
  linkLabel?: string;
};

export function FeatureCard({ title, text, icon, href, linkLabel }: FeatureCardProps) {
  return (
    <article className="rounded-4xl border border-fenland-purple/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card motion-reduce:hover:translate-y-0">
      {icon ? <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-fenland-soft text-2xl" aria-hidden="true">{icon}</div> : null}
      <h3 className="text-xl font-black text-fenland-dark">{title}</h3>
      <p className="mt-3 leading-7 text-fenland-dark/75">{text}</p>
      {href && linkLabel ? <CTAButton className="mt-6" href={href} variant="ghost">{linkLabel}</CTAButton> : null}
    </article>
  );
}
