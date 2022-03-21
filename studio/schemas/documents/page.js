import { MasterDetailIcon } from '@sanity/icons'
import { MdSearch, MdHome, MdSettings, MdAddCircle } from "react-icons/md";

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  icon: MasterDetailIcon,
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
  ],
  groups: [
    {
      name: 'settings',
      title: 'Settings',
      icon: MdSettings,
    },
    {
      name: 'content',
      title: 'Content',
      icon: MdHome,
      default: true, 
    },
    {
      name: 'seo',
      title: 'SEO',
      icon: MdSearch,
    },
  ],
  fields: [
    
    {
      name: 'content',
      group: 'content',
      type: 'array',
      title: 'Page content',
      of: [
        { type: 'hero', icon: MdAddCircle },
        { type: 'quote', icon: MdAddCircle },
        { type: 'visualiser', icon: MdAddCircle },
        { type: 'richList', icon: MdAddCircle },
        
      ],
    },

    {
      name: 'title',
      group: 'settings',
      type: 'string',
      title: 'This title populates meta-tags on the webpage',
    },
    
    {
      name: 'slug',
      group: 'settings',
      type: 'slug',
      title: 'Slug',
    },
    {
      name: 'includeInSitemap',
      group: 'settings',
      type: 'boolean',
      initialValue: true,

      title: 'Include page in sitemap',
      description: 'For search engines. Will be added to /sitemap.xml',
    },
    {
      name: 'disallowRobots',
      group: 'settings',
      type: 'boolean',
      initialValue: false,
      title: 'Disallow in robots.txt',
      description: 'Hide this route for search engines',
    },
    {
      name: 'description',
      group: 'seo',
      type: 'text',
      title: 'Description',
      description: 'This description populates meta-tags on the webpage',
    },
    {
      name: 'openGraphImage',
      group: 'seo',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage',
    },
  },
}
