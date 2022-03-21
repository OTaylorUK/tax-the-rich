import React from 'react'
import { MdAttachMoney } from "react-icons/md";

export default {
  name: 'moneyAmounts',
  type: 'document',
  title: 'Money Amounts',
  icon: MdAttachMoney,
  fields: [
    {
      name: 'displayValue',
      type: 'string',
      title: 'The display value e.g $1 million',
    },
    {
      name: 'shortValue',
      type: 'string',
      title: 'The shorter version of the display value e.g. $1m',
    },
    {
      name: 'actualValue',
      type: 'number',
      title: 'The numerical value e.g. 1000000',
    },
  ],

  preview: {
    select: {
      title: 'shortValue',
      subtitle: 'actualValue',
    },
    prepare({ title, subtitle }) {
     
      return {
        title: `${title}`,
        subtitle: `${subtitle}`,
      };
    },
  },
}
