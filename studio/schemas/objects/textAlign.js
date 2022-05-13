import React from 'react'
import { MdFormatAlignLeft } from "react-icons/md";

// const highlightIcon = () => (
//   <span style={{ fontWeight: 'bold' }}>H</span>
// )
const highlightRender = props => {
  const alignment = props?.alignment ? props?.alignment : 'left'
  return (
  <span style={{ display: 'block', textAlign: alignment}}>{props.children}</span>
  )
}
export default {
  title: 'Text Align',
  name: 'textAlign',
  type: 'object',
  
  fields: [
    {
      title: 'Alignment',
      name: 'alignment',
      type: 'string',
      options: {
        list: [
          {title: 'Left', value: 'left'},
          {title: 'Right', value: 'right'},
          {title: 'Center', value: 'center'},
        ],
      }
    }
  ],
  blockEditor: {
    icon: MdFormatAlignLeft,
    render: highlightRender
  },
  preview: {
    // select: {
    //   title: 'name',
    // },
    prepare({ title}) {
      
      return {
        title: `alignment`,
      };
    },
  },
};
