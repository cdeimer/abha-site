import { defineCollection } from 'astro:content';
import { notionLoader } from 'notion-astro-loader';

const notionIsConfigured = Boolean(import.meta.env.NOTION_API_KEY && import.meta.env.NOTION_DATABASE_ID);

const database = defineCollection({
  loader: notionIsConfigured
    ? notionLoader({
        auth: import.meta.env.NOTION_API_KEY,
        database_id: import.meta.env.NOTION_DATABASE_ID,
        filter: {
          property: 'Draft',
          checkbox: {
            equals: false,
          },
        },
      })
    : {
        name: 'notion-loader-fallback',
        async load() {
          console.warn('Notion content loader disabled: NOTION_API_KEY and/or NOTION_DATABASE_ID is missing.');
        },
      },
});

export const collections = { database };
