import { useEffect, useState,useRef, useContext } from 'react';
import { useThemeContext } from '../../context/theme';

const Box = ({ height, width, colour, zIndex, displayVal, iteration, context}) => {

	let varClass = 'absolute top-0' 
	let variableLabelArr = ['block']
	// let variableLabelArr = ['md:hidden group-hover:block']

	if(iteration == 0){
		varClass = 'sticky top-20' 
		// variableLabelArr = ['hidden md:block' ]
	
	}

	const boxRef = useRef()


	const scrollToResults = () => {
		if (boxRef?.current) {
			if(iteration == 0){
				context?.scrollToTop() 
			}else{
				boxRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })  
			}
		
		}
	}


	// useEffect(()=>{

	// },[labelClass])


	/**
	 * if label width is bigger than container width then make it outside position (use class) else have it displayed inside.
	 */

	// const labelRef = useRef()
	
	// const [labelClass, setLabelClass] = useState('bottom-2 right-2')
	// const [labelWidth, setLabelWidth] = useState(null)
	// const [boxWidth, setBoxWidth] = useState(null)

	// useEffect(()=>{

	// 	if (labelRef?.current && boxRef?.current) {

	// 		const curLabelWidth = labelRef.current.offsetWidth;
	// 		const boxWidth = boxRef.current.offsetWidth;

	// 		if(curLabelWidth !== 0){
	// 			setLabelWidth(curLabelWidth)
	// 		}
			

	// 		if(!context?.showLabels){
	// 			setLabelClass('hidden ')
	// 		}else{
	// 			if(labelWidth >= boxWidth){
	// 				setLabelClass('left-full top-full ')
	// 			}else{
	// 				setLabelClass('bottom-2 right-2 ')
	// 			}
	// 		}
		
	// 	}else{
	// 		setLabelClass('bottom-2 right-2 ')
	// 	}



	
		
		
	// },[labelRef,boxRef,context.showLabels, labelWidth])

	// let variableLabel = variableLabelArr.join(' ')



	const { isDark } = useThemeContext()

	const [bgColour, setBgColour] = useState(null)

	useEffect(()=>{
		if(isDark){
			setBgColour(colour.dark)
		}else{
			setBgColour(colour.light)
		}
	},[isDark])


	return (
		<div ref={boxRef} key={iteration} className={`${varClass} group cursor-pointer opacity-100 hover:opacity-80 shadow-sm border  left-0`}  
		style={{
			height: `${height}px`,
			width: `${width}px`,
			backgroundColor: `${bgColour}`,
			zIndex: `${zIndex}`,
			scrollMarginBottom: '200px'
		}}

		onClick={()=> scrollToResults()}
		>

			{/* <span ref={labelRef} className={` border bg-white  p-2  absolute    whitespace-nowrap bg-opacity-70  ${labelClass}`}
			// style={{
			// 	backgroundColor: `${colour}`,
			// }}
			>{displayVal}</span> */}
		</div>
	);
}
 
export default Box;
