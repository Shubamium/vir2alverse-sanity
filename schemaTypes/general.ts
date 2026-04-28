import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'general',
  title: 'General',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      name: 'preset',
      title: 'Preset ID',
      description: `To use this preset, set this as 'main'`,
      type: 'string',
    }),

    defineField({
      name: 'hs',
      title: 'Home Slider',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 't',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'url',
              type: 'url',
            }),
            defineField({
              name: 'i',
              title: 'Image',
              type: 'image',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'staff',
      title: 'Staff List (About Page)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'n',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'r',
              title: 'Role',
              type: 'string',
            }),
            defineField({
              name: 'd',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'pfp',
              title: 'Image',
              type: 'image',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'pw',
      title: 'Passwording?',
      type: 'boolean',
    }),
  ],
})
