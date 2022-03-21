
export default {
  type: 'document',
  name: 'siteNavigation',
  title: 'Navigation',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'button',
    },
    {
      name: 'menu',
      title: 'Menu',
      type: 'array',
      of: [ { title: 'Link',type: 'button',} ],
    },
    {
      name: 'button',
      title: 'Button',
      type: 'button',
    },
  ],
  preview: {
   
    prepare({ title= 'Navigation' }) {
      return {
        title: `${title}`,
      };
    },
  },
}
