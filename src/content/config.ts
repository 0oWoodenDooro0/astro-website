import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

const projects = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		techStack: z.array(z.string()),
		githubLink: z.string().url().optional(),
		priority: z.number().default(0),
	}),
});

const config = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/config" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tech: z.string(),
		github_path: z.string(),
		path_linux: z.string(),
		path_mac: z.string(),
		path_windows: z.string(),
	}),
});

export const collections = { blog, projects, config };


