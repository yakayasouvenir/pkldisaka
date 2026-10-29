import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    answer: z.string(),
    category: z.string(),
    eyebrow: z.string().default("PANDUAN MAGANG & VOKASI INDUSTRI"),
    author: z.string().default("Tim Mentor Industri Saka"),
    authorRole: z.string().default("Praktisi & Koordinator Pembinaan PKL Saka"),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    readingTime: z.string().default("~5 Menit"),
    image: z.string().default("/images/13.webp"),
    imageAlt: z.string().default("Dokumentasi kegiatan pembinaan PKL siswa dan mahasiswa di Saka Malang"),
    imageCaption: z.string().default("Suasana pembelajaran dan pengerjaan proyek riil siswa PKL di studio Saka Malang."),
    keywords: z.array(z.string()).default([]),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});
const portofolio = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/portofolio" }),
  schema: z.object({
    title: z.string(), client: z.string(), industry: z.string(), category: z.string(),
    year: z.number(), tech: z.array(z.string()), summary: z.string(),
    challenge: z.string(), solution: z.string(), result: z.string(), internRole: z.string().optional(),
  }),
});
export const collections = { blog, portofolio };
