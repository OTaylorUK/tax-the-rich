export default {
  title: 'Twitter Card',
  name: 'twitterCard',
  type: 'object',
  description: 'Twitter summary card with image.',
  
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
      title: 'Twitter Handle',
      name: 'twitterHandle',
      type: 'string',
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
