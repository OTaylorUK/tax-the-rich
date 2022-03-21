import React from 'react'
export default {
  title: 'colour',
  name: 'colour',
  type: 'object',
  
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Hex',
      name: 'hex',
      type: 'string',
      initialValue: '#',
      validation: Rule => [
        Rule.min(7).error('Too few'),
        Rule.max(7).error('Too much'),
      ],
    },
   
  ],
  preview: {
    select: {
      title: 'name',
      hex: 'hex',
    },
    prepare({ title, hex }) {
      const styles = {
        backgroundColor: hex,
        height: '80%',
        width: '80%',
        borderRadius: '50%',
        boxShadow: '0px 0px 10px #00000042'
      };
      return {
        title: `${title}`,
        subtitle: `${hex}`,
        media: <span style={styles}></span>
      };
    },
  },
};
