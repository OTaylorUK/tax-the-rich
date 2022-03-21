export default {
  type: 'object',
  name: 'colourPalette',
  title: 'Colour Palette',
  fields: [
    {
      title: 'Colour Palette',
      name: 'colourPalette',
      type: 'array',
      of: [{ type: 'colour' }],
      options: {
        layout: 'tags',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title = 'Colour Palette'}) {
      return {
        title: title,
      }
    },
  },
};
