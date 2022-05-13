export default {
  type: 'object',
  name: 'generalText',
  title: 'General Text',
 
  fields: [
    {
      name: 'textContent',
      type: 'simplePortableText',
      title: 'Text Content',
    },
  
  ],
  preview: {
    select: {
      title: 'textContent',
    },
    prepare({ title }) {
      const block = (title || []).find(block => block._type === 'block')

      return {
        title: block
        ? block.children
          .filter(child => child._type === 'span')
          .map(span => span.text)
          .join('')
        : 'No title',
        subtitle: 'General text section',
      };
    },
  },
};
