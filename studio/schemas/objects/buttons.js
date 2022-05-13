import {  MdSmartButton } from "react-icons/md";

export default {
  title: 'Buttons',
  name: 'buttons',
  type: 'object',
  description: 'only to be used inside portable text content',
  
  fields: [
    {
      title: 'Buttons',
      name: 'buttons',
      type: 'array',
      of: [{ type: 'button' }],
      options: {
        layout: 'tags',
      },
    },
   
  ],
  preview: {
    select: {
      buttons: 'buttons',
    },
    
    prepare({ buttons}) {

      let text = buttons?.map(button => (
        button?.portableButton?.[0]?.children?.filter(child => child._type === 'span')?.map(span => span.text)
        // button?.portableButton?.children?.filter(child => child._type === 'span')?.map(span => span.text)
      ))?.join(', ')


      const title = text !== undefined ? text : 'No buttons set';
      return {
        title: title,
        media: MdSmartButton
      };
    },
  },
};
