// import { useEffect, useState } from 'react';

import { useEffect, useState, useRef } from 'react'

const Body = ({ additionalClass = '', children }) => {
	// ref={resultsRef}
	return (
		<div className={`${additionalClass} w-full bg-custom-faded flex flex-col justify-center items-center`}>
			<div  style={{scrollMarginTop: '200px'}} className="relative w-full bg-custom-faded  flex flex-col items-center">
				<div className="w-full md:w-9/12 p-10 sm:p-12 gap-12 flex flex-col text-center items-center text-custom-text">
					{children}
				</div>
			</div>
		</div>
	
	);
}
 
export default Body;