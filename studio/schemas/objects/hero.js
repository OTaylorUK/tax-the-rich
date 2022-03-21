export default {
  type: 'object',
  name: 'hero',
  title: 'Hero',
 
  fields: [
    {
      name: 'Header',
      type: 'simplePortableText',
      title: 'Header',
    },
    {
      name: 'buttons',
      type: 'array',
      title: 'Buttons',
      of: [ { title: 'Button',type: 'button',} ],
    },
  ],
  preview: {
    select: {
      Header: 'Header',
    },
    prepare({ Header }) {
      const block = (Header || []).find(block => block._type === 'block')

      return {
        title: block
        ? block.children
          .filter(child => child._type === 'span')
          .map(span => span.text)
          .join('')
        : 'No title',

        subtitle: 'Hero section',
      };
    },
  },
};
