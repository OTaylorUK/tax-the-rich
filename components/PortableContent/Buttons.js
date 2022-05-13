import React from 'react'
import PortableButton from './PortableButton'


function Buttons({value}) {

  const buttons = value?.buttons
  return (
    <div className={`button-wrapper flex flex-flow flex-wrap gap-6`}>
      {buttons?.map((button, index) => {
        button.hasMargin = true;
        return(
          <PortableButton key={`btn-${index}`}content={button} />

        )
      })}
  </div>
  )
}

export default Buttons
