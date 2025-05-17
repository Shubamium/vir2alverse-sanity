import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'talents',
  title: 'Talents',
  type: 'document',

  fields: [
    // Define your fields here
    defineField({
      title: 'Name',
      name: 'n',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'n',
      },
    }),

    defineField({
      name: 'ca',
      title: 'Color Accent',
      description: 'Hex color code, ex: #FF312E',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      type: 'text',
    }),

    defineField({
      name: 'il',
      title: 'Info List',
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
              name: 'v',
              title: 'Value',
              type: 'string',
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'vid',
      title: 'Video ID',
      description: 'Video ID from youtube, the part after the watch?v= in the url',
      placeholder: 'ANkxRGvl1VY',
      type: 'string',
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'object',
      fields: [
        defineField({
          name: 'x',
          title: 'X',
          type: 'url',
        }),
        defineField({
          name: 'yt',
          title: 'Youtube',
          type: 'url',
        }),
        defineField({
          name: 'd',
          title: 'Donate',
          type: 'url',
        }),
        defineField({
          name: 'm',
          title: 'Merch',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'arts',
      title: 'Arts',
      type: 'object',
      options: {
        collapsed: true,
        collapsible: true,
        columns: 2,
      },
      fields: [
        defineField({
          name: 'ta',
          title: 'Talent Animation (1:1) ',
          description: 'Transparent Webp',
          type: 'file',
        }),
        defineField({
          name: 'fb',
          title: 'Full Body (1:1)',
          description: ' Fallback for Talent Animation',
          type: 'image',
        }),
        defineField({
          name: 'st',
          title: 'Standing (1:1)',
          type: 'image',
        }),
        defineField({
          name: 'pfp',
          title: 'Profile Pic (1:1)',
          type: 'image',
        }),
        defineField({
          name: 'logo',
          title: 'Logo (1:1)',
          type: 'image',
        }),
        // defineField({
        //   name: 'vid',
        //   title: 'Transparent/Black BG Full Body Video',
        //   type: 'file',
        // }),
      ],
    }),
  ],
})
