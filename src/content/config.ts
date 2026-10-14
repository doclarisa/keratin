import { defineCollection, z } from "astro:content";

// Blog posts live in src/content/blog/*.md — one file per article. The file
// name becomes the URL slug: /blog/<file-name>/.
const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    // Meta description + card excerpt. Keep under ~155 characters.
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    // Short label printed on the generated cover when there's no photo.
    coverLabel: z.string(),
    // Optional real photo in /public (e.g. "/images/blog/foo.jpg"). Only use
    // photos you have rights to; never pass off keratin before/afters as nanoplasty.
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = { blog };
