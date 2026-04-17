import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional(),
    gallery: z.array(z.object({
      image: z.string(),
      caption: z.string().optional(),
    })).optional(),
  }),
});

const settings = defineCollection({
  type: 'data',
  schema: z.any(),
});

export const collections = { blog, settings };
