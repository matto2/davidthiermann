import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const links = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/links' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    url: z.string(),
    description: z.string().optional(),
    order: z.number(),
    thumbnail: image().optional(),
    thumbnailZoom: z.boolean().optional(),
    thumbnailShrink: z.boolean().optional(),
    thumbnailHeight: z.number().optional(),
    isIcon: z.boolean().optional(),
    contactCard: z.boolean().optional(),
  }),
});

export const collections = { links };
