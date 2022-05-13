import React from 'react'
import Svg from 'react-inlinesvg';


function Figure({value}) {
  
  return (
    

    <div className="w-full">
      <Svg className="icon" no-cors="true" src={value?.asset?.url} height="30px" width="30px" title="socialIcon" />
   </div>
  )
}
export default Figure
