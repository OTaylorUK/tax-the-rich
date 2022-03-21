import React from 'react'
import {PortableText} from '@portabletext/react'
import Image from './Image'
import Link from 'next/link';

const PortableButton = ({content}) => {

  const {portableButton : blocks, buttonStyle, buttonSize, intLink, link, isLink} = content ;

  const btnContent =
    <PortableText
    value={blocks}
    components={{
      types: {
        figure: Image,
      },
      block: {
        // Ex. 1: customizing common block types
        normal: ({ children }) => <span className="font-gaegu uppercase">{children}</span>,
        span: ({ children }) => <span className="font-bold uppercase">{children}</span>,
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

  let style = buttonStyle !== undefined ? buttonStyle.toLowerCase() : 'text';
  let size = buttonSize !== undefined ? buttonSize.toLowerCase() : 'default';



  let classList = `max-w-sm flex flex-wrap gap-1 flex-row items-center justify-center btn-style-${style} btn-size-${size}`;


  if (!outputLink) {
    return (
      <button className={classList}>{btnContent}</button>
    )
  } else {
    return (
      <Link  href={linkURL}>
				<a className={classList}  target={linkTarget}>{btnContent}</a>
      </Link>
    )
  }

}

export default PortableButton
