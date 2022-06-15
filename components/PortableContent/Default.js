import React, { useEffect,useState } from 'react'
import {PortableText} from '@portabletext/react'
import Figure from './Figure'
import DropDown from './DropDown'
import PortableButton from './PortableButton'
import {Buttons, Button} from '../Button'
import  {findAndReplaceHolder} from '../../utils/globalFunc';
import { motion } from "framer-motion";

function Default(props) {
  const {blocks, overrides, findReplace = null} = {...props}

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
    if (findReplace !== null) {

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


  const sentence = {
    hidden: {opacity: 1},
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  }

  const letter = {
    hidden: { opacity: 0, y: 50},
    visible: {
      opacity: 1,
      y:0,
    },
  }


  
  return (
    <div className={`flex flex-wrap flex-col items-center justify-center text-center ${options?.customClass} ${options?.containerMargin} ${options?.textAlign}`}>
       <PortableText
        value={blocks}
        components={{
          types: {
            dropDown: DropDown,
            figure: Figure,
            button: Button,
            buttons: Buttons,
            
          },
          marks: {
            internalLink: ({value, children}) => {
              // log
              const url = value.slug.current ? value.slug.current : '/'
              return (
              <a href={url} target="_self" 
              >
                {children}
              </a>
              )
            },	
            link: ({children, value}) => {
              const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
              return (
              <a href={value.href} target="_blank" rel={rel}>
                {children}
              </a>
              )
            },
          },
          block: {
            // Ex. 1: customizing common block types
            h1: ({ children }) => {
              // console.log({children});
              return (
                <motion.h1  
                variants={sentence}
                initial='hidden'
                animate="visible"
                className={` ${options?.textColor} mb-10 lg:leading-snug`}
                >{children?.map((child, i)=>{
                  if(typeof child === 'string'){
                    return child?.split("").map((char,i) => {
                      return(
                        <motion.span 
                        key={i} 
                        variants={letter}
                        >{char}</motion.span>
                      )
                    })
                  }else{
                    return child
                  }
                 
                })}
                 </motion.h1>
              )
            }
           
           ,
            h2: ({ children }) =>
              <h2 className={``} > { children }</h2>,
            h3: ({ children }) =>
              <h3 className={`font-bold text-xl md:text-3xl ${options?.textColor} mb-8`} > { children }</h3 >,
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
