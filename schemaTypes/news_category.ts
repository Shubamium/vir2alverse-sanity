import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'news_category',
  title: 'News Category',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
  ],
})
