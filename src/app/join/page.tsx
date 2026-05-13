import type { Metadata } from 'next';
import { FeatureCard } from '@/components/cards/FeatureCard';
import { FAQAccordion } from '@/components/cards/FAQAccordion';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { AlertBanner } from '@/components/ui/AlertBanner';
import { CTAButton } from '@/components/ui/CTAButton';
import { faqs } from '@/content/faqs';
import { site } from '@/content/site';

export const metadata: Metadata = { title: 'Join Us' };

export default function JoinPage() {
  return <><Breadcrumbs crumbs={[{ label: 'Join us' }]} /><PageHero eyebrow="Join us" title="Start your Fenland Running Club journey" intro="New adult runners are welcome. The club encourages runners of different abilities, but current membership fees, trial arrangements and forms need confirming before launch." primaryHref={`mailto:${site.email}`} primaryLabel="Contact the club" /><section className="py-16 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><AlertBanner>Confirm membership fees, trial policy, PARQ link, Connect My Club link and the best public contact email.</AlertBanner><div className="mt-10 grid gap-6 md:grid-cols-3"><FeatureCard title="1. Say hello" text="Contact the club so someone can suggest the most suitable next step and session." icon="👋" /><FeatureCard title="2. Try a session" text="Club nights generally take place on Tuesday and Thursday evenings at Wisbech Rugby Club." icon="📍" /><FeatureCard title="3. Become a member" text="TODO: add approved joining process, membership fees and external membership link." icon="✅" /></div><div className="mt-10 flex flex-col gap-3 sm:flex-row"><CTAButton href="/training/">View training</CTAButton><CTAButton href="/contact/" variant="outline">Contact details</CTAButton></div></div></section><section className="bg-fenland-soft py-16"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><SectionHeader title="Joining FAQs" /><div className="mt-8"><FAQAccordion faqs={faqs.filter((faq) => faq.category === 'Joining')} /></div></div></section></>;
}
