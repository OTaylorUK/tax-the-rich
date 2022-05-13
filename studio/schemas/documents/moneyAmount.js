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
    {
      name: 'color',
      title: 'Color',
      type: 'colorPicker'
    },
  
  ],

  preview: {
    select: {
      title: 'shortValue',
      subtitle: 'actualValue',
      color: 'color'
    },
    prepare({ title, subtitle, color }) {
     
      const styles = {
        backgroundColor: color,
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      };


      return {
        title: `${title}`,
        subtitle: `${subtitle}`,
        media: <span style={styles}> <MdAttachMoney/> </span>
      };
    },
  },
}
