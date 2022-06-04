import {PortableText} from '@portabletext/react'
import Figure from './Figure'
import DropDown from './DropDown'
import PortableButton from './PortableButton'
import {Buttons} from '../Button'

import React from 'react';


const Dynamic = (props) => {

  const {blocks, context, overrides} = props

  const options = {
    textColor: overrides?.textColor ? overrides?.textColor : 'text-custom-secondary',
    containerMargin: overrides?.containerMargin ? overrides?.containerMargin : '',
    textAlign: overrides?.textAlign ? overrides?.textAlign : 'text-left',
    customClass: overrides?.customClass ? overrides?.customClass : '',
  }


  if (!blocks) {
    console.error('Missing blocks')
    return null
  }

  blocks.map((content, index) => {
    if (content._type === 'button') {
      content.hasMargin = true
    }
    if (content._type === 'dropDown') {
      content.context = context
      content.context = props?.context
    }
  })

  return (
    <div  className={`w-[min-content] flex flex-wrap flex-row gap-5  row items-center justify-center ${options?.customClass} ${options?.containerMargin} ${options?.textAlign}`}>
       <PortableText
        value={blocks}
        components={{
          types: {
            dropDown: DropDown,
            figure: Figure,
            button: PortableButton,
            buttons: Buttons,
            
          },
          block: {
            // Ex. 1: customizing common block types
            h1: ({ children }) => <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl capitalize text-custom-secondary mb-10">{children}</h1>,
            h2: ({ children }) => <h1 className="font-bold text-xl md:text-3xl  text-custom-secondary  ">{children}</h1>,
            h3: ({ children }) => <h1 className="font-bold text-xl md:text-3xl text-custom-secondary mb-8">{children}</h1>,
            normal: ({children}) => <p className="mb-4">{children}</p>,
            span: ({children}) => <p className="capitalize text-lg mb-4 text-custom-secondary">{children}</p>,
          },
        }}
      />

   </div>
  )
}

export default Dynamic
