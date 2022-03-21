import bcp47 from 'bcp47';
import { MasterDetailIcon } from '@sanity/icons'

import { MdShare, MdSearch, MdSettings } from "react-icons/md";

export default {
  type: 'document',
  name: 'siteSEO',
  title: 'Site SEO',
  icon: MasterDetailIcon,
  groups: [
    
    {
      name: 'settings',
      title: 'Settings',
      icon: MdSettings,
      default: true, 
    },
    {
      name: 'generalSEO',
      title: 'General SEO',
      icon: MdSearch,
    },
    {
      name: 'openGraph',
      title: 'Open graph',
      icon: MdShare,
    },
  
  ],

  fields: [
  
    {
      name: 'frontpage',
      group: 'settings',
      type: 'reference',
      weak: true,

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
      name: 'robotIndex',
      group: 'settings',
      type: 'boolean',
      initialValue: true,
      description: 'Choose whether to allow robots to index this page in search results.',
    },
    {
      name: 'title',
      group: 'generalSEO',
      type: 'string',
      title: 'Site title',
      description: 'The main title for the site.',
    },
    {
      title: 'URL',
      group: 'generalSEO',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical url',
    },

    {
      title: 'Site Logo',
      group: 'generalSEO',
      description: 'Best choice is to use an SVG where the color are set with currentColor',
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
      title: 'Twitter Card',
      group: 'openGraph',
      description: 'Twitter summary card with image',
      name: 'twitterCard',
      type: 'twitterCard',
    },
    {
      title: 'General Card',
      group: 'openGraph',
      name: 'generalCard',
      type: 'generalCard',
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
