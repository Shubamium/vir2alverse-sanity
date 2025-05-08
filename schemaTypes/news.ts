import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    // Define your fields here
    defineField({
      name: 't',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 't',
      },
    }),
    defineField({
      name: 'bl',
      title: 'Banner List',
      type: 'image',
    }),
    defineField({
      name: 'bm',
      title: 'Banner Main',
      type: 'image',
    }),

    defineField({
      name: 'ex',
      title: 'Excerpt',
      type: 'text',
    }),
    defineField({
      name: 'tags',
      type: 'array',
      description: 'Uppercase only',
      of: [
        {type: 'string', validation: (Rule) => Rule.uppercase().error('Tags must be uppercase')},
      ],
    }),
    defineField({
      name: 'cat',
      title: 'Category',
      type: 'reference',
      to: [{type: 'news_category'}],
    }),
    defineField({
      name: 'd',
      title: 'Date',
      type: 'date',
    }),

    defineField({
      name: 'a',
      title: 'Article',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    }),
  ],
})
