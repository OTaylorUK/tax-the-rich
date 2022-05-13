import React, { useEffect, useState } from 'react'
import {PortableText} from '@portabletext/react'
import Image from './Image'
import Link from 'next/link';
import { useRouter } from 'next/router'

const PortableButton = (props) => {

  let data  = props?.value ? props?.value : props?.content
  const {portableButton : blocks, buttonStyle, buttonSize, intLink, link, isLink, query} = {...data} ;

  let additionalClass = data?.additionalClass !== undefined ? data?.additionalClass : '';
  const router = useRouter()


  const [btnClass, updateBtnClass] = useState('')


	const [isActive, setIsActive] = useState(false);

// console.log('data', data);
  // add button for buttons output in portabletext block
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
  
	let linkURL, linkTarget, outputLink = isLink;
  
  if (outputLink) {
    if (link !== null) {
      linkURL = `${link}`
			linkTarget = '_blank'
    } else if (intLink !== null) {
      if (intLink !== '/') {
       linkURL = `/${intLink}`
      } else {
       linkURL = `${intLink}`
      }
			linkTarget = '_self'
    } else {
      outputLink = false
    }
  }

  // console.log('link:', link);
  // console.log('intLink:', intLink);




  let hrefData = {
    pathname: linkURL
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
        props?.context?.buttonFunction()
      }
      if(props.context.buttonFunctionAlt !== undefined){
        props?.context?.buttonFunctionAlt()
      }
    }

    // setIsActive(!isActive)
  }

  let classList = `group max-w-sm flex flex-wrap gap-1 flex-row items-center justify-center btn-styled btn-style-${style} btn-size-${size} ${addMargin} ${btnClass}  ${isActive ? 'is-active' : ''} ${'/'+router?.query?.slug == linkURL ? 'is-active' : ''}`;

  
  if (!outputLink) {
    return (
      <button 
      onClick={() => {
        handleContext()
    }}  className={classList}>{btnContent}</button>
    )
  } else {
    return (
      <Link  href={hrefData}>
				<a  onClick={() => {
        handleContext()
    }}  className={classList}  target={linkTarget}>{btnContent}</a>
      </Link>
    )
  }

}

export default PortableButton
