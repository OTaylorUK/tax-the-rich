
import HeaderSelect from "../../PortableText/HeaderSelect";
import { useEffect, useState } from 'react';

import React from 'react'
import Image from "next/image";
import {Results, Icons, Key, Source} from "../../Visualise";



const Visualiser = (props) => {

	const { Header } = props;


	const [unitIcon, updateUnitIcon] = useState(null); // by default 1 icon = 1 unit
	const [dataReady, updateDataReady] = useState(false); // by default 1 icon = 1 unit
	


	function log10(n){
		return Math.round(100*Math.log(n)/Math.log(10))/100;
	}


	const [objectA, updateObjectA] = useState(null);
	const [objectB, updateObjectB] = useState(null);
	const [numOfUnits, updateNOU] = useState({
			raw: null,
			display: null,
	});
	const [uPerIcon, updateUPI] = useState({
		raw: null,
		display: null,
	});


	useEffect(() => {

		/**
		 * generate the icon (from objectA)
		 * @returns nextjs Image element
		 */
		const setUnitIcon = () => {

			if (objectA?.image?.asset?.url === undefined) return null;
			let icon =
				<Image
				src={objectA?.image?.asset?.url}
				alt="Picture of the author"
				width={15}
				height={15}
				/>
				
			return icon;
	
		}

		/**
		 * calculate the total number of objectA(units e.g. cars) that objectB (money amount) can buy
		 * @returns number to 2 decimal points
		 */
		const calcTotalUnits = () => {
			let valPrimary = objectA?.price;
			let valSecondary = objectB?.actualValue;
			const numOfUnits = Number((valSecondary / valPrimary).toFixed(2))


			// update the display figure to reflect the true value 
			const formattedNumOfUnits = numOfUnits.toLocaleString("en-US");
			// updateNiceNumber(formattedNumOfUnits)

			updateNOU(prevState => ({
                ...prevState,
                display: formattedNumOfUnits
			}));
			
			return numOfUnits;
		}

		/**
		 * updates values depending on how many total unit are to be displayed - helps to prevent slow browser warning
		 * @param {*} totalUnits 
		 */
		const calcAdjusted = (totalUnits) => {
			let perUnit = 1;



			// get the log value of the totalUnits e.g. if 100 = log 2, if 1000 = log 3
			const logTen = log10(totalUnits);


			/**
			 * POTENTIAL CHANGE - IF LOADING IS TOO SLOW CAN REDUCE THE AMOUNT LOG10 IS REDUCED BY
			 * SAFE  :  WITH -2 (max output 999)
			 * CURRENT  :  WITH -3 (max output 9999)
			 */
			const logFloor = Math.floor(logTen) - 3;

			// calc the per unit using the floored log 10 - limits the number to prevent slow browser warning 

			if (logTen > 3) {
				perUnit = Math.pow(10, logFloor)		
			}

	
			// units per icon
			const displayPerUnit = perUnit.toLocaleString("en-US");
			// updateUnitsPerIcon(displayPerUnit)
			
			updateUPI({
				raw: perUnit,
				display: displayPerUnit
			});

			// number of icons output
			const updatedTotalUnits =  Number((totalUnits / perUnit).toFixed(2))
			// updateCalculatedNum(updatedTotalUnits)
			updateNOU(prevState => ({
                ...prevState,
                raw: updatedTotalUnits
			}));

		}

		if(objectA !== null && objectB !== null){
			// updates the unit icon everytime objectA changes
			updateUnitIcon(setUnitIcon())

			const totalUnits = calcTotalUnits()

			calcAdjusted(totalUnits)
			updateDataReady(true);

		} 

	}, [objectA,objectB]);

	
	const visualiseContext = {
		updateObjectA,
		updateObjectB,
		updateDataReady
	}


	const visualiseData = {
		ready: dataReady,
		amounts: {
			a: objectA,
			b: objectB
		},
		results: {
			unitIcon: unitIcon,
			unitsPerIcon: uPerIcon,
			numOfUnits: numOfUnits,
		}
	}
	// arr of obj
	const keyArr = [
		{
			visual: unitIcon,
			units: visualiseData?.results?.unitsPerIcon,
			isPlural: Number(uPerIcon.raw) > 1 ? true : false,
			name: {
				singular: objectA?.nameSingle,
				plural:  objectA?.namePlural,
			}
		}
	]
	

	return (
		<div className=" flex flex-col justify-center items-center">

			{/* <span>objectA: {objectA}</span>
			<span>objectB: {objectB}</span> */}
			{/* HEADER - Header selection e.g. compare x with/to y */}
			<HeaderSelect blocks={Header} context={visualiseContext} />

			
			<div className="results-wrapper w-8/12">
				{/* RESULTS - Calculated number of units e.g. 100 houses */}
				<Results numOfUnits={visualiseData?.results?.numOfUnits} object={visualiseData?.amounts?.a}   />
				
				{/* KEY - number of units per icon e.g. 1 icon = 100 units */}
				<Key keys={keyArr}   />

				{/* ICONS - Visual representation e.g. ICON / BLOCK */}
				<Icons data={visualiseData} />

				<Source source={objectA?.source} price={objectA?.price} description={objectA?.description} />
			</div>

		</div> 
	)

}
 
export default Visualiser;