
export default {
  type: 'document',
  name: 'socialShare',
  title: 'Social Share',
  fields: [
   
    {
      name: 'content',
      title: 'content',
      type: 'object',
      fields: [
        {name: 'text', type: 'string', title: 'Text'},
        {name: 'button', type: 'button'},
        {name: 'social',  type: 'array',
          of: [{ title: 'Social Channel', type: 'reference',
          to: [{ type: 'socialMedia' }], }]
        },
      ],
    },
  ],
  preview: {
   
    prepare({ title= 'Footer' }) {
      return {
        title: `${title}`,
      };
    },
  },
}
