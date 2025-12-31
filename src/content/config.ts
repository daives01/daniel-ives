// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const projectCollection = defineCollection({
    type: 'content',
    schema: z.object({
        index: z.number(),
        title: z.string(),
        date: z.string(),
        description: z.string(),
        quickLinks: z.array(z.object({
            title: z.string(),
            link: z.string()
        })).optional(),
        hasArticle: z.boolean().optional().default(true)
    })

});

const postCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        description: z.string().optional(),
        draft: z.boolean().optional().default(false)
    })
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    'projects': projectCollection,
    'posts': postCollection
};
