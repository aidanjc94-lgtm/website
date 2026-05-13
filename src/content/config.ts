import { defineCollection, z } from 'astro:content';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishDate: z.date(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    placeholder: z.boolean().default(false)
  })
});

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    time: z.string().optional(),
    location: z.string(),
    category: z.string(),
    ctaLabel: z.string().optional(),
    ctaUrl: z.string().url().optional(),
    placeholder: z.boolean().default(false)
  })
});

const policies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    reviewDate: z.string(),
    placeholder: z.boolean().default(false)
  })
});

export const collections = { news, events, policies };
