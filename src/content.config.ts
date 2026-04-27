import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    author: z.string(),
    written_by: z.string().optional(),
    date_created: z.union([z.string(), z.date()]),
    date_published: z.union([z.string(), z.date()]).optional(),
    date_last_updated: z.union([z.string(), z.date()]).optional(),
    tags: z.array(z.string()).default([]),
    icon: z.string().optional(),
  }),
});

export const collections = { posts };
