export default {
  type: 'object',
  name: 'blockVisual',
  title: 'Block Visualise',
 
  fields: [
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
