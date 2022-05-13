import React from 'react'


export default {
  title: 'Simple Portable Text',
  name: 'simplePortableText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'H5', value: 'h5'},
        {title: 'H6', value: 'h6'},
        {title: 'span', value: 'span'},
        {title: 'Quote', value: 'blockquote'}
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'}
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        
        ],

        annotations: [{ type: 'link' }, { type: 'internalLink' }, { type: 'textAlign' }],
      },
    },
    {
      type: 'image'
    },
    {
      type: 'button',
    },
    {
      type: 'buttons',
    },
    {
      type: 'dropDown',
    },
    
    
  ],
};
