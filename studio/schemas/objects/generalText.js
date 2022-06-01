import { MdCreate,MdSettings } from "react-icons/md";

export default {
  type: 'object',
  name: 'generalText',
  title: 'General Text',
  groups: [
    {
      name: 'settings',
      title: 'Settings',
      icon: MdSettings,
    },
    {
      name: 'content',
      title: 'Content',
      icon: MdCreate,
      default: true, 
    },
  ],
  fields: [
    {
      group: 'settings',
      title: 'Find and replace content?',
      name: 'findReplace',
      type: 'boolean',
      description: 'Use this to define if there is dynamic content to be replaced',
      initialValue: false
    },

    {
      group: 'content',
      name: 'headerContent',
      type: 'simplePortableText',
      title: 'Header Content',
    },
    {
      group: 'content',
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
