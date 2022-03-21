import React from 'react'
import {PortableText} from '@portabletext/react'
import EmbedHTML from './EmbedHTML'
import Figure from './Figure'
import DropDown from './DropDown'

function Default(props) {
  const {blocks} = props

  if (!blocks) {
    console.error('Missing blocks')
    return null
  }

  return (
    <div className={'flex flex-wrap items-center justify-center'}>
       <PortableText
        value={blocks}
        components={{
          types: {
            embedHTML: EmbedHTML,
            dropDown: DropDown,
            figure: Figure,
          },
          block: {
            // Ex. 1: customizing common block types
            h1: ({children}) => <h1 className="font-bold text-9xl uppercase mb-10">{children}</h1>,
          },
        }}
      />

   </div>
  )
}

export default Default
