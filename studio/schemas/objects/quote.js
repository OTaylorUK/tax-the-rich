import { MdBrush, MdCreate } from "react-icons/md";

export default {
  type: 'object',
  name: 'quote',
  title: 'Quote',
  groups: [
    {
      name: 'content',
      title: 'Content',
      icon: MdCreate,
      default: true, 
    },
    {
      name: 'style',
      title: 'Style',
      icon: MdBrush,
    },
  ],
  fields: [
    {
      name: 'quoteText',
      group: 'content',
      type: 'text',
      title: 'Quote',
    },
    {
      name: 'author',
      group: 'content',
      type: 'string',
      title: 'Author',
    },
    {
      name: 'citation',
      title: 'Citation',
      group: 'content',
      type: 'url',
    },
    {
      name: 'backgroundColour',
      title: 'Background Colour',
      group: 'style',
      type: 'reference',

      to: [{ type: 'colourPalette' }],
    },
  ],
  preview: {
    select: {
      Author: 'author',
      quoteText: 'quoteText',
    },
    prepare({ Author = '', quoteText = '' }) {

      function truncate(str, n){
        return (str.length > n) ? str.substr(0, n-1) + '..."' : str ;
      };


      return {
        title: truncate(quoteText, 40),
        subtitle: 'Quote by: '+Author,
      };
    },
  },
};
