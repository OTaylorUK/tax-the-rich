
import { useEffect, useState, useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';

import React from 'react'
import {Results, Icons, Source, Keys, Boxes, Toggle} from "../../Visualise";
import { useRouter } from "next/router";
import { useResizeDetector } from 'react-resize-detector';
import { formatNumberToLocal } from '../../../utils/globalFunc';
import { PortableButton } from '../../PortableContent';

const BlockVisual = ({buttons, componentContext}) => {

	let { moneyAmounts: initalMoney } = {...componentContext?.data}

	// dynamically update the width and height on resize
	const { width: elWidth, height: elHeight, ref: elementRef } = useResizeDetector();
	
	const router = useRouter()

	const resultsRef = useRef()

	const [containerWidth, setContainerWidth] = useState(elWidth)
	const [boxes, setBoxes] = useState(null);
	const [keys, setKeys] = useState(null);
	const [contHeight, setContHeight] = useState(0);
	const [showLabels, setShowLabels] = useState(true);
	const [moneyAmounts, setMoneyAmounts] = useState(null)
	const [displayType, setDisplayType] = useState('y');

	const variableSelection = {
		amounts: moneyAmounts,
		displayType: displayType,
	}
	

	// const colourArray = [
	// 	'#ee9f77',
	// 	'#e4ab7c',
	// 	'#d8b782',
	// 	'#ccc287',
	// 	'#becd8d',
	// 	'#aed892',
	// 	'#9be298',
	// 	'#84ec9d',
	// 	'#65f5a3',
	// 	'#2effa9',

	// ]
	

	// Use effects //
	/**
	 * on load / router change
	 */
	useEffect(() => {

		const filterRouterQueries = (query) => {

			const amounts = []
			const people = []


			Object.keys(query)
				.reduce((obj, key) => {
					
					let selectedAmount,person,uid;
					// always will exist
					if(key.toLowerCase().includes('comp')){
						uid = key.split('comp')?.[1]

						selectedAmount = formatNumberToLocal(router.query[key])
						selectedAmount['uid'] = uid; // add unique identifier for matching name (if set) to money amount

						amounts.push(selectedAmount)
					}
					
					// conditionally will exist
					if(key.toLowerCase().includes('person')){
						uid = key.split('person')?.[1]

						person = {
							name: router.query[key],
							uid: uid
						};
						people.push(person)

					}
			}, {});

			// combine names to value for displaying people from rich list
			if(people.length > 0 ){
				people.map((person)=>{
					amounts.map((amount)=>{
						if(amount?.uid === person?.uid){
							amount.displayValue = `${person?.name} (${amount.displayValue})`
						}
					})
				})
			}

			// sort array by asc size
			amounts.sort((a,b) => (a.actualValue > b.actualValue) ? 1 : ((b.actualValue > a.actualValue) ? -1 : 0))

			return amounts
		}

		/**
		 * sets the states for the lists and conditionally might add user selected choices if passed as a param in the url
		 */
		const getData = async () => {


			// original default values to use
			let moneyAmountsArr = JSON.parse(JSON.stringify(initalMoney));


			const amounts = filterRouterQueries(router.query)

			if(amounts.length > 0){
				moneyAmountsArr = amounts;
			}

			setMoneyAmounts(moneyAmountsArr)
			// setIsUpdating(true) // triggers comp reload with new data
		}

		console.log('get data is called');
		getData()
	},[router.query, initalMoney ])

	
	/**
	 * on user selection change
	 * get priced items and rich list
	 * 
	 */
	useEffect(() => {
		const{amounts, displayType} = {...variableSelection}


		const colourArray = [
			'#FAFAFB',
			'#DADAEC',
			'#BBBDDD',
			'#9FA3CE',
			'#868CBE',
			'#6E77AF',
			'#5964A0',
			'#465491',
			'#354582',
			'#263872',
			'#1A2D63',
			'#102354',
			'#081B45',
		]

		if(amounts === null && (elWidth === undefined) ){
			return null
		}

		const checkForWidthChange = (width) =>{
	
			if(width !== containerWidth){
				setContainerWidth(width)
				return true
			}else{
				return false
			}
		}

		const updateVals = checkForWidthChange(elWidth);


		const formatAmounts = () => {
			let keys = [], boxes = [], maxHeight, heightDiff, widthDiff, curIter = 0;

	

			const width = elWidth;
			// const height = elHeight;
			
			const base = {
				// size: width / amounts?.length, //px
				size:  5, //px
				value: amounts?.[0]?.actualValue
			}

			// change the increment rate of the colours so that each box is visually distinct when possible 
			const incBy = Math.floor(colourArray.length / amounts.length )

			// limits width of each box so it's possible to partially see all boxes from the start
			const baseMaxWidth =  width / amounts.length
		
			

			// loop over the set money amounts to create keys and update/add values
			amounts?.map((amount, i) => {

				// dynamically selected colour - depends on the number of values to show
				const selectedColour = colourArray[curIter];

				// calculate the new height/width of element 

				const baseInc = (amount?.actualValue / base?.value)

				const actualSize = (baseInc * base?.size)
				const currentBoxMaxWidth = baseMaxWidth * (i + 1)

				let boxHeight = actualSize;
				let boxWidth = actualSize;
				
				// will scroll horizontally
				if(displayType === 'x'){
					// is bigger than the max height then add the difference to the width
					if(actualSize > elHeight){
						heightDiff = actualSize - elHeight
						widthDiff = actualSize - boxWidth
						boxHeight = elHeight // set to the max height possible
						boxWidth = boxWidth + heightDiff
					}

				}else{
					// is bigger than the max width of current box then add the difference to the height
					if(actualSize > currentBoxMaxWidth){
						widthDiff = actualSize - currentBoxMaxWidth
						heightDiff = actualSize - boxHeight
						boxWidth = currentBoxMaxWidth // set to the max width possible
						boxHeight = boxHeight + widthDiff
					}

					maxHeight = boxHeight;
				}

				

				const displayBox = {
					id: `box-${i}`,
					height: boxHeight,
					width: boxWidth,
					colour: selectedColour,
					displayVal: amount.displayValue,
					zIndex: amounts.length - i
				}

				boxes.push(displayBox)

				const boxKey = {
					visual: <div className={`h-4 w-4 `} style={{
						backgroundColor: `${selectedColour}`
					}} ></div>,
					displayVal: amount.displayValue,
				}
				keys.push(boxKey)

				curIter += incBy
			})

			return {
				keys,
				boxes,
				maxHeight
			}
		}

		const {keys,boxes, maxHeight} = formatAmounts()

		// :need-fix: prevents infinite loop - must be a better way to do this... maybe a useCallback ??
		if(updateVals){
			setBoxes(boxes)
			setKeys(keys)
			if(displayType === 'y'){
				setContHeight(maxHeight)
			}
		}

	},[variableSelection, elWidth, containerWidth])


	const scrollToTop = () => {
		if (elementRef?.current) {
			elementRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })  
		}
	}

	// download button
	const downloadButtonClick = useCallback(() => {

		if (resultsRef.current === null) {
				return null
		}
			
		// if (questionRef.current === null) {
		// 	  return null
		// }

		// hide specific article section
		function filter(node) {
			return (node.tagName !== 'ARTICLE');
		}


	
		toPng(resultsRef.current, { cacheBust: true, filter: filter})
			.then((dataUrl) => {
				
				const link = document.createElement('a')
				link.download = `visualise-1billion.png`
				link.href = dataUrl
				
				link.click()
			})
			.catch((err) => {
			console.error(err)
			})
	}, [resultsRef])

	const buttonFunction = () => {
		downloadButtonClick()
	}
	const btnContent = {
		buttonFunction
	}

	const toggleContext = {
		showLabels,
		setShowLabels
	}
	
	return (
		<>
			<div className="container gap-16 flex flex-col justify-center items-center mb-[100vh]">
				<div className=" w-full lg:w-4/5  flex flex-col justify-center items-center  px-6">
					
					<div ref={resultsRef} style={{scrollMarginTop: '200px'}} className="w-full bg-custom-faded  flex-col">
						
						<div className="w-full p-10 sm:p-12 gap-12 flex flex-col">
							<div className="relative w-full h-full mb-20">
								<Keys keys={keys} type={'block'}  />

								<Toggle context={toggleContext} />
								
								<div className={` ${displayType === 'x'? 'h-[30vh]' : 'h-auto'}  w-full  relative`} ref={elementRef} 
								style={{
									height: `${contHeight}px`,
									scrollMarginTop: '200px'
								}}>
									<Boxes  data={boxes} context={{scrollToTop,showLabels}} />
								</div>
							</div>

							<div className="w-full h-full ">
								<article className="relative -top-10 wrap flex flex-row flex-wrap justify-center items-center gap-5">
									{buttons?.map((button, i) => {
										return (
											<PortableButton key={`btn-${i}`} content={button} context={btnContent}/>
										)
									})}
								</article>
							</div>

						</div>
					</div>
				</div>
			</div> 
		</>
	)

}
 
export default BlockVisual;