import React from 'react'
import Svg from 'react-inlinesvg';


function Image({ value }) {

  const size = value?.size === undefined ? '100%' : value?.size
  const percSize = parseFloat(size) / 100.0;

  const height = value?.asset?.metadata?.dimensions?.height * Number(percSize)
  const width = value?.asset?.metadata?.dimensions?.width * Number(percSize)
  
  if (value?.btnStyle == 'action'){
    return (
      <div className='box-wrap '>
         <Svg className="icon" no-cors="true" src={value?.asset?.url} height={`${height}px`}  width={`${width}px`} title="socialIcon" />
      </div>
    )
  } else {
    return (
      <Svg className="icon" no-cors="true" src={value?.asset?.url} height={`${height}px`}  width={`${width}px`} title="socialIcon" />
    )
  }
  
}

export default Image
