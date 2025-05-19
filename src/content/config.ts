import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.string().default("技术"), // 添加文章分类
    tags: z.array(z.string()).optional(), // 添加标签支持
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    url: z.string().optional(),
    github: z.string().optional(),
    technologies: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    completed: z.coerce.date(),
  }),
});

export const collections = { blog, projects };
