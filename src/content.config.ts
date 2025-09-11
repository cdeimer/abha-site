import { defineCollection } from 'astro:content';
import { notionLoader } from 'notion-astro-loader';

const database = defineCollection({
  loader: notionLoader({
    auth: import.meta.env.NOTION_API_KEY,
    database_id: import.meta.env.NOTION_DATABASE_ID,
    filter: {
      property: 'Draft',
      checkbox: {
        equals: false,
      },
    },
  }),
});

export const collections = { database };
