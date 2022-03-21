import { MdCreate } from "react-icons/md";


export default {
  type: 'object',
  name: 'footer',
  title: 'Footer',
 
  fields: [
    {
      name: 'lhs',
      title: 'Left hand side',
      type: 'array',
      of: [ { title: 'Button',type: 'button',} ],
    },
    {
      name: 'rhs',
      title: 'Right hand side',
      type: 'array',
      of: [ { title: 'Button',type: 'button',} ],
    },
    {
      name: 'middle',
      title: 'Middle',
      type: 'object',
      fields: [
        {name: 'text', type: 'string', title: 'Text'},
        {name: 'social',  type: 'array',
        of: [ { title: 'Button',type: 'button',} ], title: 'Social channel'},
      ],
    },
  ],
  preview: {
    prepare({ title = 'Footer'}) {
      return {
        title: title,
      };
    },
  },
};
