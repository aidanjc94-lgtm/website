import Image from 'next/image';
import { CTAButton } from '@/components/ui/CTAButton';
import { ClubStat } from '@/components/ui/ClubStat';
import { site } from '@/content/site';
import { getPageByKey } from '@/lib/pageVisibility';

export function Hero() {
  const homePage = getPageByKey('home');

  return (
    <section className="relative isolate overflow-hidden bg-fenland-warm bg-fenland-radial">
      <div className="absolute left-1/2 top-16 h-64 w-[38rem] -translate-x-1/2 rounded-full border-[28px] border-fenland-purple/10 motion-safe:animate-pulse" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-fenland-red">{String(homePage.heroEyebrow)}</p>
          <h1 className="mt-5 text-5xl font-black tracking-tight text-fenland-dark sm:text-7xl lg:text-8xl">
            {String(homePage.heroTitle)}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-fenland-dark/75">
            {String(homePage.heroIntro)}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href={site.primaryCtaHref}>{site.primaryCtaLabel}</CTAButton>
            <CTAButton href={site.secondaryCtaHref} variant="outline">{site.secondaryCtaLabel}</CTAButton>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-5xl bg-fenland-purple p-6 text-white shadow-card sm:p-8">
            <div className="rounded-4xl bg-white p-8 text-center">
              <Image src={site.logo} alt="Fenland Running Club logo" width={280} height={280} className="mx-auto h-auto max-h-64 w-auto" priority />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <ClubStat value="Tue" label="Club night" />
              <ClubStat value="Thu" label="Club night" />
              <ClubStat value="EA" label="Affiliated" />
              <ClubStat value="10" label="Fenland 10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
