
export default {
  type: 'document',
  name: 'siteFont',
  title: 'Site Font',
  
  fields: [
    {
      title: 'file',
      name: 'file',
      type: 'file',
    },
    
   
  ],
  preview: {
    
    prepare({ title = 'file' }) {
      return {
        title: `${title}`,
      };
    },
  },
}
