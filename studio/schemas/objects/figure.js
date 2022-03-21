export default {
  name: 'figure',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
    },
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
    },
    {
      name: 'size',
      type: 'string',
      title: 'Display size',
      description: 'Control the display size of the image',
      options: {
        list: [
          {title: '100%', value: '100%', defaultValue: true},
          {title: '75%', value: '75%'},
          {title: '50%', value: '50%'},
          {title: '25%', value: '25%'},
        ],
      },
    },
    
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
    },
  },
};
