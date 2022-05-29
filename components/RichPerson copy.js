import Image from "next/image";
import { PortableButton } from "./PortableContent";
import  {findAndReplaceHolder} from '../utils/globalFunc';
import { useEffect, useState, useRef } from 'react'
import PersonWealth from "./PersonWealth";

const RichPerson = ({indv, buttons}) => {

	// console.log('indv.person.squareImage', indv.person);

	const {	personName, uid, wealthSource, wealth, imgUrl, rank, changeInWealth, positiveChange} = indv


	console.log({changeInWealth});
	// deep copy to prevent rewriting data for all instances of the buttons
	let newBtns = JSON.parse(JSON.stringify(buttons));

	// the holder to find and replace
	const findReplace = {
		"name": personName
	}

	newBtns?.map((button, i) => {
		let ogText;

		// if the value has already been changed used the original unaltered text - otherwise the findReplace wont work
		if (button.ogText) {
		  ogText = button.ogText;
		} else {
		  ogText = button?.portableButton?.[0]?.children?.[0].text;
		}

		let newText = findAndReplaceHolder({ replaceVals: findReplace, str: ogText })

		// if do not match then findReplace has worked
		if (ogText !== newText) {
		  button?.portableButton?.[0]?.children?.[0].text = newText
		  // must store the original value for when the select option is changed
		  button.ogText = ogText
		}

		if(button.intLink === 'visualise-a-billion'){
			button.query = {
				person1: uid,
				comp1: `${wealth.actualValue}`,
				comp2: 1000000, //1m
				comp3: 100000000, //100m
			}
		}else if(button.intLink === 'what-it-buys'){
			button.query = {
				person1: uid,
			}
		}

		
	})

	return (
		<div className="flex flex-col drop-shadow-md hover:drop-shadow-xl group cursor-pointer  ">
			<div className="flex flex-col h-full top-0 group-hover:-top-2 transition-[top] relative overflow-hidden rounded-md ">
				<div className="absolute left-0 top-0  z-30 w-10 h-10 bg-custom-highlight flex justify-center items-center">
					<span className="text-custom-secondary text-md font-bold">{rank}</span>
				</div>
				
				<div className="image-wrapper relative ">
					
					<PersonWealth change={changeInWealth} isPositive={positiveChange} />
					
					<Image
						className="z-10"
						src={imgUrl}
						alt={`Picture of ${personName}`}
						width={200}
						height={200}
						layout='responsive'
					/>
					<div className="button-wrapper flex flex-row justify-center items-center  w-full md:h-full top-0 left-0  py-6 md:py-0 relative md:absolute md:opacity-0 z-20  transition-opacity md:group-hover:opacity-100">
						<div className="w-10/12">
							{newBtns.map((button, i) => {
								button.additionalClass = 'm-5'
								return (
									<PortableButton key={`btn-${i}`} content={button}	/>
								)
							})}
						</div>
						<div className="absolute w-full h-full top-0 left-0  md:bg-custom-primary opacity-90 z-[-1] ">
						</div>
					</div>
				</div>

				<div className="person-info bg-custom-highlight flex-1 justify-center align-center flex flex-col py-5">
					<div className="flex flex-col text-center  justify-center items-center text-custom-secondary">
						<span className="text-2xl font-bold  mb-1 px-4">{personName}</span>
						<span className="text-custom-text opacity-80 font-gaegu text-sm uppercase mb-4">{wealthSource}</span>
						<span className="text-3xl tracking-tight font-bold uppercase ">{wealth.shortValue}</span>
					</div>
					
				</div>
			</div>
		
			
		</div>
	);
}
 
export default RichPerson ;