import type { Metadata } from 'next';
import { getPageByKey } from '@/lib/pageVisibility';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeader } from '@/components/sections/SectionHeader';
import { AlertBanner } from '@/components/ui/AlertBanner';
import { CTAButton } from '@/components/ui/CTAButton';
import { contact, site } from '@/content/site';

const pageContent = getPageByKey('contact');

export const metadata: Metadata = { title: pageContent.title };

export default function ContactPage() {
  return <><Breadcrumbs crumbs={[{ label: 'Contact' }]} /><PageHero eyebrow={String(pageContent.heroEyebrow)} title={String(pageContent.heroTitle)} intro={String(pageContent.heroIntro)} primaryHref={`mailto:${contact.generalEnquiryEmail}`} primaryLabel="Email the club" /><section className="py-16 sm:py-24"><div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"><div><SectionHeader title="Contact details" intro={contact.contactPageIntro} /><div className="mt-8 rounded-4xl bg-fenland-soft p-6"><p className="font-black text-fenland-dark">Email</p><a className="mt-2 inline-flex font-bold text-fenland-purple underline" href={`mailto:${contact.generalEnquiryEmail}`}>{contact.generalEnquiryEmail}</a><p className="mt-4 text-sm text-fenland-dark/70">{contact.contactNotes}</p></div></div><div className="rounded-5xl bg-fenland-purple p-8 text-white"><h2 className="text-3xl font-black">Meeting point</h2><p className="mt-4 text-white/80">The club generally meets at {contact.venueName}, {contact.locationSummary}.</p><p className="mt-4 text-white/80">{contact.meetingPointNotes}</p><div className="mt-6"><CTAButton href={contact.mapLink} variant="secondary">Map link</CTAButton></div></div></div></section><section className="bg-fenland-soft py-16"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><AlertBanner>Future contact form functionality is intentionally not built in phase one. If requested later, add a privacy-reviewed form backend or external form link.</AlertBanner></div></section></>;
}
