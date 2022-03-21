export default {
  title: 'General Card',
  name: 'generalCard',
  type: 'object',
  description: 'General social card for facebook, linkedin etc.',
  
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
    },
    prepare({ title, description}) {
      return {
        title: title,
        subtitle: description,
      };
    },
  },
};
