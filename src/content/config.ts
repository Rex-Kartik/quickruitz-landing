import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.union([z.date(), z.string()]),
    category: z.string().default('Hiring Strategy'),
    readTime: z.string().default('5 min read'),
    excerpt: z.string().optional().default(''),
    image: z.string().optional().default('/logox.png'),
  }),
});

export const collections = {
  'blogs': blogCollection,
};
