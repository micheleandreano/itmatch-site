import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog ITMatch — articoli IT recruiting / AI. Solo italiano.
// Servono per SEO (keyword) e per essere inviati ai clienti via email.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('ITMatch'),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
