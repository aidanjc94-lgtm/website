import faqsData from '../../content/faqs/faqs.json';
import type { FAQ } from './types';

export const faqs: FAQ[] = (faqsData as FAQ[]).filter((faq) => faq.published).sort((a, b) => a.order - b.order);
