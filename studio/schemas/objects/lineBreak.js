import React from 'react'
import { MdFormatLineSpacing } from "react-icons/md";

// const highlightIcon = () => (
//   <span style={{ fontWeight: 'bold' }}>H</span>
// )
const spacingRender = props => {
  const spacing = props?.spacing ? props?.spacing : '0'
  return (
  <span style={{ display: 'block', paddingBottom: spacing}}>{props.children}</span>
  )
}
export default {
  title: 'Line Break',
  name: 'lineBreak',
  type: 'object',
  
  fields: [
    {
      title: 'Spacing',
      name: 'spacing',
      type: 'string',
      options: {
        list: [
          {value: '0', title: '0;'},
          {value: '1', title: '0.25rem'},
          {value: '2', title: '0.5rem'},
          {value: '3', title: '0.75rem'},
          {value: '4', title: '1rem'},
          {value: '5', title: '1.25rem'},
          {value: '6', title: '1.5rem'},
          {value: '7', title: '1.75rem'},
          {value: '8', title: '2rem'},
          {value: '9', title: '2.25rem'},
          {value: '10', title: '2.5rem'},
          {value: '11', title: '2.75rem'},
          {value: '12', title: '3rem'},
          {value: '14', title: '3.5rem'},
          {value: '16', title: '4rem'},
          {value: '20', title: '5rem'},
          {value: '24', title: '6rem'},
          {value: '28', title: '7rem'},
          {value: '32', title: '8rem'},
          {value: '36', title: '9rem'},
          {value: '40', title: '10rem'},
          {value: '44', title: '11rem'},
          {value: '48', title: '12rem'},
          {value: '52', title: '13rem'},
          {value: '56', title: '14rem'},
          {value: '60', title: '15rem'},
          {value: '64', title: '16rem'},
          {value: '72', title: '18rem'},
          {value: '80', title: '20rem'},
          {value: '96', title: '24rem'}
        ],
      }
    }
  ],
  blockEditor: {
    icon: MdFormatLineSpacing,
    render: spacingRender
  },
  preview: {
    // select: {
    //   title: 'name',
    // },
    prepare() {
      
      return {
        title: `Spacing`,
      };
    },
  },
};
