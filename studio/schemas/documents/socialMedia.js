import { MdSettings, MdCreate, MdShare } from "react-icons/md";
import React from 'react'

export default {
  type: 'document',
  name: 'socialMedia',
  title: 'Social Media',
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
    }
  ],
  fields: [
    {
      group: 'settings',
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      group: 'content',
      name: 'button',
      title: 'Button',
      type: 'button',
    },
   
  ],
  preview: {
    select: {
      title: 'name',
      icon: 'icon',
      icon1: 'button.portableButton.1.asset.url',

    },
    prepare({ title, icon, icon1 }) {
     
      let iconURL = null;
      let finalIcon;

      if (icon1 !== undefined) {
        iconURL = icon1;
        finalIcon = <img src={iconURL} />;

      } else {
        finalIcon = MdShare;
      };



      return {
        title: title,
        media: finalIcon
      };
    },
  },
}
