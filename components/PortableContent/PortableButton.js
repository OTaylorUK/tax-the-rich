import React, { useEffect, useState } from 'react'
import {PortableText} from '@portabletext/react'
import Image from './Image'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { formatLinkHref, isActiveLink } from '../../utils/globalFunc';

const PortableButton = (props) => {

  let data  = props?.value ? props?.value : props?.content
  const {portableButton : blocks, isActive = false, buttonStyle, buttonSize, intLink, link, isLink, query} = {...data} ;
  let additionalClass = data?.additionalClass !== undefined ? data?.additionalClass : '';
  const router = useRouter()


  const [btnClass, updateBtnClass] = useState(additionalClass)


  let addMargin = '';
  if (data?.hasMargin) {
    addMargin= 'mb-5'
  }





  let style = buttonStyle !== undefined ? buttonStyle.toLowerCase() : 'text';
  let size = buttonSize !== undefined ? buttonSize.toLowerCase() : 'default';



  if (style === 'action') {
	// let newBlocks = JSON.parse(JSON.stringify(blocks));

    blocks.map((content, index) => {
      if (content._type === 'figure') {
        content.btnStyle = style
      }
    })

  }
  

  const btnContent =
    <PortableText
    value={blocks}
    components={{
      types: {
        figure: Image,
      },
      block: {
        // Ex. 1: customizing common block types
        normal: ({ children }) => <span className="font-gaegu text-center uppercase ">{children}</span>,
        span: ({ children }) => <span className="font-bold uppercase ">{children}</span>,
      },
    }}
    />
  

  const {outputLink, linkURL, linkTarget } = formatLinkHref(link, intLink, isLink)



  let customAction = {
    isSet: false,
    doAction: null,
  }

  let hrefData = {
    pathname: linkURL?.trim()
  }

  if (query) {
    hrefData.query = query;
  }



  // on load functions 

  useEffect(()=>{

    updateBtnClass(additionalClass)
  },[additionalClass])

  
  if (props?.context?.onLoad) {
    additionalClass = props?.context?.onLoad?.buttonAddClass({btnURL: linkURL})
  }


  // on interact functions
  // calls function set wherever the button is first output
  const handleContext = () => {

    if (props?.context) {

      if(props.context.buttonFunction !== undefined){
        props?.context?.buttonFunction.call()
      }
      if(props.context.buttonFunctionAlt !== undefined){
        props?.context?.buttonFunctionAlt.call()
      }
    }

    // if(isActive){
    //   customAction.doAction()
    // }

    // setIsActive(!isActive)
  }

  const formatClassObj = (arr) => {
    let classArray = ['']


    arr.forEach(obj => {
      for (const [key, value] of Object.entries(obj)) {
        if(value !== null){
          // if(key === 'hover'){
          //  value.split(' ').map((text) =>  classArray.push(`hover:${text}`))
          // }else{
          //   classArray.push(value)
          // }
          classArray.push(value)

        }else{
          classArray.push('')

        }
      }
    });
    
    return classArray.join(' ')
  }



  let styleClass = {default: null, hover: null}, sizeClass = {default: null, hover: null}

  switch (size) {
    case 'large':
      sizeClass = {
        default: 'py-4 px-6 text-lg',
      }
      break;
    case 'small':
      sizeClass = {
        default: 'py-2 px-4 text-sm',
      }
      break;
    default:
      sizeClass = {
        default: 'py-2 px-4 text-base',
      }
      break;
  }

  switch (style) {
    case 'icon':
      styleClass = {
        default: 'w-12 h-12 text-custom-accent border-solid border border-custom-accent bg-transparent',
        hover: 'hover:underline hover:bg-custom-accent ',
      }
      sizeClass = {
        default: 'py-0 px-0',
      }
      break;

    case 'text':
      styleClass = {
        default: `text-custom-secondary ${isActive && 'text-custom-accent'}`,
        hover: ' hover:text-custom-accent ',
      }
      sizeClass = {
        default: 'py-0 px-0',
      }
      break;

    case 'primary':
      styleClass = {
        default: 'bg-custom-highlight text-custom-secondary border-solid border border-custom-highlight',
        hover: 'hover:bg-custom-secondary hover:text-custom-highlight',
      }
     break;

    case 'ghost':

      styleClass = {
        default: 'text-custom-accent border-solid border border-custom-accent',
        hover: 'hover:bg-custom-accent hover:text-custom-primary',
      }
      break;

    case 'ghostinverse':
      styleClass = {
        default: 'text-custom-primary bg-custom-accent border-solid border border-custom-accent',
        hover: 'hover:bg-transparent hover:text-custom-accent',
      }
     break;

    case 'action':
      styleClass = {
        default: 'text-custom-accent border-solid border border-custom-accent',
        hover: 'hover:bg-custom-accent hover:text-custom-primary',
      }
      break;

    default:
      break;
  }

  const isActiveClass = '/' +router?.query?.slug == linkURL ? 'is-active' : '';

  const finalClass = `${btnClass} ${isActiveClass} group flex flex-wrap gap-1 flex-row items-center justify-center rounded-lg ${styleClass.hover} ${styleClass.default} ${sizeClass.default}`

  
  if (!outputLink) {
    return (
      <button 
      data-style={style}
      data-size={size}
      onClick={() => {
        handleContext()
    }}  className={finalClass}>{btnContent}</button>
    )
  } else {
    return (
      <Link  href={hrefData}>
				<a  
          data-style={style}
          data-size={size}
        onClick={() => {
        handleContext()
    }}  className={finalClass}  target={linkTarget}>{btnContent}</a>
      </Link>
    )
  }

}

export default PortableButton
