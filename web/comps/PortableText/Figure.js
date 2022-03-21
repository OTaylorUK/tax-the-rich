import React from 'react'


function Figure({node}) {
  const {alt, caption, asset} = node
  if (!asset) {
    return undefined
  }
  return (
    <figure >
      {/* <img
        src={}
        
        alt={alt}
      /> */}
      {caption && (
        <figcaption>
          <div >
            <div >
              <p>{caption}</p>
            </div>
          </div>
        </figcaption>
      )}
    </figure>
  )
}

export default Figure
