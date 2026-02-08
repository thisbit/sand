import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      label: z.string().optional(),
      description: z.string().optional(),
      image: image().optional(),
      gallery: z.array(image()).optional(),
      order: z.number().optional(),
    }),
});

const team = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdoc}", base: "./src/content/team" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string().optional(),
      avatar: image().optional(),
      order: z.number().optional(),
    }),
});

export const collections = { projects, team };
