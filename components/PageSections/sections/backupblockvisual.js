
import { useEffect, useState, useRef } from 'react';

import React from 'react'
import {Results, Icons, Source, Keys} from "../../Visualise";


const BlockVisual = ({buttons, componentContext}) => {

	// const { Header } = props;
	

	console.log({componentContext});
	let { moneyAmounts } = {...componentContext?.data}


	
	// const filtered moneyAmounts?.map((amount, i) => { })

	const [boxes, setBoxes] = useState(null);
	const [keys, setKeys] = useState(null);
	const [contHeight, setContHeight] = useState(0);
	

	
	const elementRef = useRef();


	function log10(n){
		return Math.round(100*Math.log(n)/Math.log(10))/100;
	}
	useEffect(()=>{

		const divElement = elementRef.current;

		// the current container width
		const divWidth = divElement.offsetWidth

		// the minimum box size for height & width
		const minSize = 10 //px


		// array of just the actual number
		const actVals = moneyAmounts?.map((amount, i) => {
			const actValue = amount.actualValue
			return actValue;
		})

		const smallestVal = Math.min(...actVals);
		
		const base = {
			maxWidth: divWidth / moneyAmounts.length,
			log10: log10(smallestVal)
		}
	
		let keys = [];

		let containerMaxHeight;



		const boxes = moneyAmounts?.map((amount, i) => {

			// creating keys

			const amountObj = {
				visual: <div className={`h-4 w-4 `} style={{
					backgroundColor: `${amount.color}`
				}} ></div>,
				displayVal: amount.displayValue,
			}

			keys.push(amountObj)


			// creating boxes
			const logTen = log10(amount.actualValue);
			const dif = (logTen + 1) - base.log10;
			const maxWidth = base.maxWidth * (i + 1)
			const calcWidth = Math.pow(10, dif);
			const overMax = calcWidth - maxWidth
			const finalWidth = overMax > 0 ?  maxWidth : calcWidth;
			const finalHeight = overMax > 0 ?  (overMax - maxWidth) + calcWidth : calcWidth;


			let box;

			if (i === 0) {
				box = <div className='absolute left-0 top-0 bg-green ' style={{
					width: "10px",
					height: "10px",
					backgroundColor: `${amount.color}`,
					zIndex: (moneyAmounts.length - i)
				}} key={`box-${i}`} ></div>

				
			} else {
				box = <div  className='absolute left-0 top-0 bg-green ' style={{
					width: `${finalWidth}px`,
					height: `${finalHeight}px`,
					backgroundColor: `${amount.color}`,
					zIndex: (moneyAmounts.length - i)

				}} key={`box-${i}`} ></div>
				
			}

			containerMaxHeight = finalHeight;
			return box;
			

		})

		setKeys(keys)
		setBoxes(boxes)
		setContHeight(containerMaxHeight)


	}, [])
	

	return (
		<>
			<div className="container gap-16 flex flex-col justify-center items-center ">
				<div className=" w-full sm:w-4/5  flex flex-col justify-center items-center  px-6">
					<div className="w-full bg-custom-faded flex flex-col justify-center items-center">
						<Keys keys={keys} type={'block'}  />
						<div className="relative  w-10/12" style={{	height: `${contHeight}px`}}  ref={elementRef} >
							{boxes} 
						</div>
					</div>
				</div>
			</div> 
		</>

	)

}
 
export default BlockVisual;