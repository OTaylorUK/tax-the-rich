import { MdBrush, MdCreate,MdSettings, MdSmartButton } from "react-icons/md";
import React from 'react'

export default {
  title: 'Button',
  name: 'button',
  type: 'object',
  validation: Rule =>
    Rule.custom(
      (fields = {}) =>
        !fields.route || !fields.link || 'Only one link type is allowed'
    ),
 
  groups: [
    {
      name: 'action',
      title: 'Action',
      icon: MdSettings,
      default: true, 
    },
    {
      name: 'content',
      title: 'Content',
      icon: MdCreate,
    },
    {
      name: 'style',
      title: 'Style',
      icon: MdBrush,
    },
  ],
  fields: [
    
    {
      group: 'action',
      title: 'Is a link?',
      name: 'isLink',
      type: 'boolean',
      description: 'Use this to define if this is a button or a link',
      initialValue: true
    },
    {
      group: 'action',
      title: 'Button action',
      description: 'Use this to define the buttons action when clicked.',
      name: 'buttonAction',
      type: 'string',
      hidden: ({ parent }) =>  parent.isLink
    },
    {
      group: 'action',
      title: 'Internal link',
      description: 'Use this to link between pages on the website',
      name: 'route',
      type: 'reference',
      to: [{ type: 'page' }],
      hidden: ({ parent, value }) => (!value && parent?.link) || !parent.isLink
    },
    {
      group: 'action',
      title: 'External link',
      name: 'link',
      type: 'url',
      hidden: ({ parent, value }) => (!value && parent?.route) || !parent.isLink
    },

    {
      group: 'content',
      title: 'Text',
      name: 'portableButton',
      description: 'Use this to add text and/or an icon to the button',
      type: 'portableButton',
    },
   

    {
      group: 'style',
      title: 'Button Style',
      description: 'Use this to define the button layout type',
      name: 'buttonStyle',
      type: 'string',
      options: {
        list: [
          {title: 'Primary', value: 'Primary', defaultValue: true},
          {title: 'Ghost', value: 'Ghost'},
          {title: 'Ghost Inverse', value: 'GhostInverse'},
          {title: 'Action', value: 'Action'},
          {title: 'Text', value: 'Text'},
        ],
      },
    },
    {
      group: 'style',
      title: 'Button Size',
      description: 'Use this to define the button size',
      name: 'buttonSize',
      type: 'string',
      options: {
        list: [
          {title: 'Default', value: 'default', defaultValue: true},
          {title: 'Small', value: 'small'},
          {title: 'Large', value: 'large'},
        ],
      },
    },
  ],
  initialValue: {
    isLink: true
  },
  preview: {
    select: {
      portableButton: 'portableButton.0',
      slug: 'route.slug.current',
      link: 'link',
      style: 'buttonStyle',
      size: 'buttonSize',
      icon1: 'portableButton.1.asset.url',
    },
    
    prepare({ slug, link, portableButton, icon1, style, size}) {

      const spanText = portableButton?.children?.filter(child => child._type === 'span')?.map(span => span.text)?.join('')

      let iconURL = null;
      let finalIcon;

      if (icon1 !== undefined) {
        iconURL = icon1;
        finalIcon = <img src={iconURL} />;

      } else {
        finalIcon = MdSmartButton;
        
      };

      const slugPath = slug
        ? slug
        : link
        ? link
        : 'Not set';
      
      const subTitle = `Style: ${style}  |  Size: ${size}  |  URL: ${slugPath}`
      return {
        title: spanText,
        subtitle: subTitle,
        media: finalIcon
      };
    },
  },
};
