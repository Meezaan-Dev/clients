import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    year: z.number().optional(),
    category: z.enum(["art", "graphic-design"]),
    disciplineLabel: z.string().optional(),
    cover: z.string(),
    coverAlt: z.string(),
    images: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        }),
      )
      .default([]),
    description: z.string().optional(),
    medium: z.string().optional(),
    dimensions: z.string().optional(),
    client: z.string().optional(),
    availability: z.enum(["available", "sold", "not-for-sale"]).optional(),
    price: z.string().optional(),
    externalUrl: z.url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(999),
  }),
});

export const collections = { work };
