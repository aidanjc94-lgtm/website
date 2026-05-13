import { CTAButton } from '@/components/ui/CTAButton';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  intro: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export function PageHero({ eyebrow, title, intro, primaryHref, primaryLabel }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-fenland-soft py-16 sm:py-20">
      <div className="absolute -right-20 top-8 h-56 w-56 rounded-full bg-fenland-red/10 blur-3xl" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {eyebrow ? <p className="text-sm font-black uppercase tracking-[0.22em] text-fenland-red">{eyebrow}</p> : null}
          <h1 className="mt-4 text-4xl font-black tracking-tight text-fenland-dark sm:text-6xl">{title}</h1>
          <p className="mt-6 text-xl leading-9 text-fenland-dark/75">{intro}</p>
          {primaryHref && primaryLabel ? <CTAButton className="mt-8" href={primaryHref}>{primaryLabel}</CTAButton> : null}
        </div>
      </div>
    </section>
  );
}
