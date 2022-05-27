export default {
  type: 'object',
  name: 'richList',
  title: 'Rich List',
 
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
        title: 'Rich List',
      };
    },
  },
};
