import type { Metadata } from 'next';
import { getPageByKey } from '@/lib/pageVisibility';
import { FAQAccordion } from '@/components/cards/FAQAccordion';
import { PolicyCard } from '@/components/cards/PolicyCard';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { AlertBanner } from '@/components/ui/AlertBanner';
import { faqs } from '@/content/faqs';
import { policies } from '@/content/policies';

const pageContent = getPageByKey('welfare-policies');

export const metadata: Metadata = { title: pageContent.title };

export default function WelfarePoliciesPage() {
  return <><Breadcrumbs crumbs={[{ label: 'Welfare & policies' }]} /><PageHero eyebrow="Welfare & policies" title="Safe, welcoming and well-run" intro="This page is the public home for welfare information, policy documents and club governance. Current documents must be approved before launch." /><section className="py-16 sm:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><AlertBanner>Add approved policy files, review dates, welfare contact details and emergency reporting guidance.</AlertBanner><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{policies.map((policy) => <PolicyCard key={policy.title} policy={policy} />)}</div></div></section><section className="bg-fenland-soft py-16"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><SectionHeader title="Welfare FAQs" /><div className="mt-8"><FAQAccordion faqs={faqs.filter((faq) => faq.category === 'Welfare')} /></div></div></section></>;
}
