export default {
  title: 'Portable Button',
  name: 'portableButton',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'span', value: 'span'},
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
      },
    },
    {
      title: 'Icon',
      type: 'figure'
    },
    
  ],
};
