import { defineField, defineType } from 'sanity';
import { TabletDeviceIcon } from '@sanity/icons'

export default defineType({
  name: 'property',
  title: 'Property',
  type: 'document',
  icon: TabletDeviceIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule: { required: () => any; }) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (Rule: { required: () => any; }) => Rule.required(),
        }
      ],
    }),
    defineField({
      name: 'body',
      title: 'Description',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection: any) {
      return { ...selection }
    },
  },

  orderings: [
    {
      title: 'Price high',
      name: 'priceDesc',
      by: [
        { field: 'price', direction: 'desc' }
      ]
    },
    {
      title: 'Price low',
      name: 'priceAsc',
      by: [
        { field: 'price', direction: 'asc' }
      ]
    },
  ],
});
