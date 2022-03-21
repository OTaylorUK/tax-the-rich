import { MasterDetailIcon } from '@sanity/icons'
import { MdImage, MdCreate, MdLink } from "react-icons/md";

export default {
  name: 'pricedItems',
  type: 'document',
  title: 'Priced Items',
  icon: MasterDetailIcon,

  groups: [
    {
      name: 'content',
      title: 'Content',
      icon: MdCreate,
      default: true, 
    },
    {
      name: 'media',
      title: 'Media',
      icon: MdImage,
    },
    {
      name: 'source',
      title: 'Source',
      icon: MdLink,
    },
  ],
  fields: [
    
    {
      name: 'nameSingle',
      type: 'string',
      group: 'content',
      title: 'The singular item name',
    },
    {
      name: 'namePlural',
      type: 'string',
      group: 'content',
      title: 'The plural item name',
    },
    {
      name: 'description',
      type: 'text',
      group: 'content',
      title: 'Description',
      description: 'This description of the item',
    },
    {
      name: 'price',
      type: 'number',
      group: 'content',
      title: 'Price (USD)',
    },
    {
      name: 'image',
      type: 'image',
      group: 'media',
      title: 'Image',
    },
    
    {
      name: 'source',
      type: 'url',
      group: 'source',
      title: 'Source',

    },
   
  ],

  preview: {
    select: {
      title: 'nameSingle',
      subtitle: 'description',
      media: 'image',
    },
    
  },
}
