// lib/validations/blogSchema.ts
import { z } from 'zod';

export const blogSchema = z.object({
  title: z
    .string()
    .min(10, 'Title must be at least 10 characters')
    .max(200, 'Title cannot exceed 200 characters'),
  excerpt: z
    .string()
    .min(50, 'Excerpt must be at least 50 characters')
    .max(300, 'Excerpt cannot exceed 300 characters'),
  content: z.string().min(100, 'Content must be at least 100 characters'),
  slug: z
    .string()
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Invalid slug format')
    .min(3)
    .max(200),
  // featuredImage: z.object({
  //   url: z.string().url(),
  //   publicId: z.string(),
  //   alt: z.string().optional(),
  //   width: z.number(),
  //   height: z.number(),
  // }),


  featuredImage: z.any().optional(),
  featuredImageAlt: z.string().optional(),

  categories: z.array(z.string()).min(1, 'Select at least one category'),
  tags: z.array(z.string()).optional(),
  
  status: z.enum(['draft', 'published', 'archived']),
  seo: z.object({
    metaTitle: z.string().max(60, 'Meta title cannot exceed 60 characters').optional(),
    metaDescription: z.string().max(160, 'Meta description cannot exceed 160 characters').optional(),
    keywords: z.array(z.string()).optional(),
  }).optional(),
});

export type BlogFormData = z.infer<typeof blogSchema>;