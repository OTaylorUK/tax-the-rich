import React from 'react'
import {PortableText} from '@portabletext/react'
import DropDown from './DropDown'

function HeaderSelect(props) {
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
    <div className={'w-3/5 flex flex-wrap items-center justify-center mb-10'}>
       <PortableText
        value={blocks}
        components={{
          types: {
            dropDown: DropDown,
          },
          block: {
            // Ex. 1: customizing common block types
            h1: ({ children }) => <h1 className="font-bold text-9xl uppercase mb-10">{children}</h1>,
            h2: ({ children }) => <h1 className="font-bold text-5xl uppercase ">{children}</h1>,
            normal: ({children}) => <p className="uppercase font-normal">{children}</p>,
          
          },
        }}
      />

   </div>
  )
}

export default HeaderSelect
