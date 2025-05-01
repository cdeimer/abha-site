import { defineCollection } from 'astro:content';
import { notionLoader } from 'notion-astro-loader';

const database = defineCollection({
  loader: notionLoader({
    auth: 'placeholder api key',
    database_id: 'placeholder database id',
    filter: {
      property: 'Draft',
      checkbox: {
        equals: false,
      },
    },
  }),
});

export const collections = { database };
