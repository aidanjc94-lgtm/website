import siteSettings from '../../content/settings/site.json';
import contactSettings from '../../content/settings/contact.json';
import socialLinksData from '../../content/settings/social-links.json';

export const site = {
  name: siteSettings.clubName,
  shortName: siteSettings.shortName,
  description: siteSettings.shortDescription,
  defaultSeoTitle: siteSettings.defaultSeoTitle,
  defaultSeoDescription: siteSettings.defaultSeoDescription,
  email: contactSettings.generalEnquiryEmail,
  membershipEmail: contactSettings.membershipEnquiryEmail,
  welfareEmail: contactSettings.welfareContactEmail,
  fenland10Email: contactSettings.fenland10EnquiryEmail,
  venue: contactSettings.venueName,
  venueAddress: contactSettings.venueAddress,
  location: contactSettings.locationSummary,
  mapLink: contactSettings.mapLink,
  what3words: contactSettings.what3words,
  meetingSummary: `${contactSettings.venueName}, ${contactSettings.locationSummary}`,
  logo: siteSettings.logoPath,
  primaryCtaLabel: siteSettings.primaryCtaLabel,
  primaryCtaHref: siteSettings.primaryCtaHref,
  secondaryCtaLabel: siteSettings.secondaryCtaLabel,
  secondaryCtaHref: siteSettings.secondaryCtaHref,
  socialLinks: socialLinksData.filter((link) => link.published).sort((a, b) => a.order - b.order),
};
