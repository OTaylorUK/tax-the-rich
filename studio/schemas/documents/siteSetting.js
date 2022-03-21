import bcp47 from 'bcp47';
import { MasterDetailIcon } from '@sanity/icons'

import { MdCreate, MdSearch, MdSettings } from "react-icons/md";

export default {
  type: 'document',
  name: 'siteSettings',
  title: 'Site settingss',
  icon: MasterDetailIcon,

  // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
  __experimental_actions: [/* "create", "delete", */ 'update', 'publish'],
  
  fieldsets: [{ name: 'footer', title: 'Footer' }],
  groups: [
    {
      name: 'settings',
      title: 'Site settings',
      icon: MdSettings,
      default: true, 
    },
    {
      name: 'seo',
      title: 'SEO',
      icon: MdSearch,
    },
    {
      name: 'navigation',
      title: 'Navigation',
      icon: MdCreate,
    },
    {
      name: 'footer',
      title: 'Footer',
      icon: MdCreate,
    },
  
  ],

  fields: [
    {
      name: 'title',
      group: 'seo',
      type: 'string',
      title: 'Site title',
      description: 'The main title for the site.',

    },
    {
      title: 'URL',
      group: 'seo',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical url',
    },
    {
      name: 'frontpage',
      group: 'settings',
      type: 'reference',
      description: 'Choose page to be the frontpage',
      to: { type: 'page' },
    },


    


    {
      title: 'Site language',
      group: 'settings',
      description:
        'Should be a valid bcp47 language code like en, en-US, no or nb-NO',
      name: 'lang',
      type: 'string',
      validation: Rule =>
        Rule.custom(lang =>
          bcp47.parse(lang) ? true : 'Please use a valid bcp47 code'
        ),
    },
    {
      title: 'Site Logo',
      group: 'settings',
      description:
        'Best choice is to use an SVG where the color are set with currentColor',
      name: 'siteLogo',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
        },
      ],
    },
    {
      title: 'Main navigation',
      group: 'navigation',
      name: 'mainNavigation',
      description: 'Select pages for the top menu',
      validation: Rule => [
        Rule.max(5).warning('Are you sure you want more than 5 items?'),
        Rule.unique().error('You have duplicate menu items'),
      ],
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'route' }],
        },
      ],
    },
    {
      title: 'Footer navigation items',
      group: 'footer',
      name: 'footerNavigation',
      type: 'array',
      validation: Rule => [
        Rule.max(10).warning('Are you sure you want more than 10 items?'),
        Rule.unique().error('You have duplicate menu items'),
      ],
      fieldset: 'footer',
      of: [
        {
          type: 'reference',
          to: [{ type: 'route' }],
        },
      ],
    },
    {
      name: 'footerText',
      group: 'footer',
      type: 'simplePortableText',
      fieldset: 'footer',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title}) {
      return {
        title: title,
      }
    },
  },
};
