import { defineCollection, z } from "astro:content";

const writing = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()),
    readingTime: z.string()
  })
});

export const collections = { writing };
