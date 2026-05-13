import fenland10Data from '../../content/pages/fenland-10-details.json';
import type { Fenland10Details } from './types';

export const fenland10: Fenland10Details = {
  ...fenland10Data,
  details: fenland10Data.details.filter((detail) => detail.published).sort((a, b) => a.order - b.order),
  links: fenland10Data.links.filter((link) => link.published).sort((a, b) => a.order - b.order),
};
