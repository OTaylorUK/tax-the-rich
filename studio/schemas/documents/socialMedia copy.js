import { MdBrush, MdCreate } from "react-icons/md";

export default {
  type: 'document',
  name: 'socialMedia',
  title: 'Social Media',
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
      group: 'content',
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      group: 'content',
      title: 'Icon',
      name: 'icon',
      type: 'image',
    },
    {
      group: 'content',
      title: 'Sharer link',
      name: 'shareLink',
      type: 'string',
    },
    {
      group: 'content',
      title: 'Profile link',
      name: 'profileLink',
      type: 'url',
    },
    {
      group: 'style',
      title: 'Button Style',
      description: 'Use this to define the button layout type',
      name: 'buttonStyle',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'grid',
        list: [
          {title: 'Primary', value: 'Primary'},
          {title: 'Ghost', value: 'Ghost'},
          {title: 'Action', value: 'Action'},
          {title: 'Text', value: 'Text'},
        ]
      },
      validation: Rule => Rule.max(1).warning('Only select one.')
    },
    {
      group: 'style',
      title: 'Button Size',
      description: 'Use this to define the button size',
      name: 'buttonSize',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'grid',
        list: [
          {title: 'Default', value: 'default'},
          {title: 'Small', value: 'small'},
          {title: 'Large', value: 'large'},
        ]
      },
      validation: Rule => Rule.max(1).warning('Only select one.')
    }
  ],
  preview: {
    select: {
      title: 'name',
      icon: 'icon',
    },
    prepare({ title, icon }) {
     
      return {
        title: title,
        media: icon
      };
    },
  },
}
