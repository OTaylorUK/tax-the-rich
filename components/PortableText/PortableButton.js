import React from 'react'
// import {PortableText} from '@portabletext/react'
import Image from './Image'

const PortableButton = (props) => {


  const {blocks, context} = props

  // add variables to pass to component inside portableText
  blocks.map((content, index) => {
    if (content._type === 'dropDown') {
      content.context = context
    }
	})



  if (!blocks) {
    console.error('Missing blocks')
    return null
  }

  return (
    <div className={'max-w-sm flex flex-wrap items-center justify-center mb-10'}>
       
      <PortableText
        value={blocks}
        components={{
          types: {
            image: Image,
            figure: Image,
            
          },
          block: {
            // Ex. 1: customizing common block types
            span: ({ children }) => <span className="font-bold uppercase mb-10">{children}</span>,
           
          
          },
        }}
      />

   </div>
  )
}

export default PortableButton
