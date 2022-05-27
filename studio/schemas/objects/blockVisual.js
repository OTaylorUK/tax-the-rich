export default {
  type: 'object',
  name: 'blockVisual',
  title: 'Block Visualise',
 
  fields: [
    {
      name: 'headerContent',
      type: 'simplePortableText',
      title: 'Header Content',
    },
    {
      name: 'textContent',
      type: 'simplePortableText',
      title: 'Text Content',
    },
    {
      name: 'buttons',
      type: 'array',
      title: 'Buttons',
      of: [ { title: 'Button',type: 'button',} ],
    },
  ],
  preview: {
    prepare() {

      return {
        title: 'Block Visualise',
        subtitle: 'Blocks used to visualise amounts of money.',
      };
    },
  },
};
