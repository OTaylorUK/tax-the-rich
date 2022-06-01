// import { useEffect, useState } from 'react';
import { useEffect, useState, useRef } from 'react'
import { forwardRef } from 'react'

const Container = forwardRef((props, ref) => {

	const { additionalClass = '', children } = props
	return (
		<div ref={ref} className="layout-container container px-4 md:px-12 flex flex-col justify-center items-center ">
			{children}
		</div>
	);
})
 
export default Container;