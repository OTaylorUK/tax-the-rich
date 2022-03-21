export default {
  type: 'object',
  name: 'richList',
  title: 'Rich List',
 
  fields: [
    {
      name: 'api',
      type: 'url',
      title: 'Api url',
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
        title: 'Rich List',
      };
    },
  },
};
