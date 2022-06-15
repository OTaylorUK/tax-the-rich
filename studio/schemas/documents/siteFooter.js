
export default {
  type: 'document',
  name: 'siteFooter',
  title: 'Footer',
  fields: [
   
    {
      name: 'middle',
      title: 'Fixed',
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
    {
      name: 'credit',
      title: 'Credit',
      type: 'object',
      fields: [
        {name: 'text', type: 'portableText', title: 'text'},
        // {name: 'hostedOn', type: 'portableButton', title: 'hostedOn'},
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
