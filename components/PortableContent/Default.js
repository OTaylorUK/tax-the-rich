import React, { useEffect,useState } from 'react'
import {PortableText} from '@portabletext/react'
import Figure from './Figure'
import DropDown from './DropDown'
import PortableButton from './PortableButton'
import Buttons from './Buttons'
import  {findAndReplaceHolder} from '../../utils/globalFunc';

function Default(props) {
  const {blocks, overrides, findReplace} = {...props}

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


  // for future ref - never put this in useeffect does not update properly on first load

  blocks.map((content, index) => {
    if (content._type === 'button') {
      content.hasMargin = true
    }
    if (findReplace !== undefined) {
      content?.children?.map((child, index) => {
        let ogText;

        // if the value has already been changed used the original unaltered text - otherwise the findReplace wont work
        if (child.ogText) {
          ogText = child.ogText;
        } else {
          ogText = child.text;
        }

        let newText = findAndReplaceHolder({ replaceVals: findReplace, str: ogText })

        // if do not match then findReplace has worked
        if (ogText !== newText) {
          child.text = newText

          // must store the original value for when the select option is changed
          child.ogText = ogText
        }

      })
    }
  })


  
  return (
    <div className={`flex flex-wrap flex-col items-center justify-center text-center ${options?.customClass} ${options?.containerMargin} ${options?.textAlign}`}>
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
            h1: ({ children }) =>
              <h1 className={`font-bold text-3xl md:text-5xl lg:text-8xl capitalize ${options?.textColor} mb-10 lg:leading-snug`}>{children}</h1>,
            h2: ({ children }) =>
              <h1 className={`font-bold text-2xl md:text-3xl lg:text-4xl    `} > { children }</h1>,
            h3: ({ children }) =>
              <h1 className={`font-bold text-xl md:text-3xl ${options?.textColor} mb-8`} > { children }</h1 >,
            normal: ({ children }) =>
              <p className={`mb-4 `} > { children }</p >,
            span: ({ children }) =>
              <p className={`capitalize text-lg mb-4 ${options?.textColor}`} > { children }</p >,
          },
        }}
      />

   </div>
  )
}

export default Default
