import Image from "next/image";
import { PortableButton } from "./PortableContent";
import  {findAndReplaceHolder} from '../utils/globalFunc';
import { useEffect, useState, useRef } from 'react'

const RichPerson = ({indv, buttons, num}) => {

	// console.log('indv.person.squareImage', indv.person);


	const number = num + 1;

	
	let url = indv.person.squareImage;
	let split = url.split('https:')

	// not formatted
	if (split.length === 1) {
		url = `https:${url}`
	}

	let netWorth = Number(indv.finalWorth / 1000).toFixed(1);
	const toFixed = Number(indv?.finalWorth).toFixed(2)
	const netWorthfinal =  Number(toFixed) * 1000000


	console.log({
		netWorth,
		toFixed,
		netWorthfinal
	});


	// deep copy to prevent rewriting data for all instances of the buttons
	let newBtns = JSON.parse(JSON.stringify(buttons));


	// the holder to find and replace
	const findReplace = {
		"name": indv?.person?.name
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

		if(button.intLink === 'show-me-the-money'){
			button.query = {
				personName: indv.person.name,
				comp1: `${netWorthfinal}`,
				comp2: 1000000, //1m
				comp3: 100000000, //100m
			}
		}else if(button.intLink === 'how-much-does-it-buy'){
			button.query = {
				personName: indv.person.name,
				personNetWorth: `${netWorth}`,
			}
		}

		
	})

	return (
		<div className="flex flex-col drop-shadow-md hover:drop-shadow-xl group cursor-pointer rounded-md ">
			<div className="container top-0 group-hover:-top-2 transition-[top] relative overflow-hidden">
				<div className="image-wrapper relative ">
					<div className="absolute left-0 top-0  z-30 w-10 h-10 bg-custom-highlight flex justify-center items-center">
						<span className="text-custom-secondary text-md font-bold">{number}</span>
					</div>
					<Image
						className="z-10"
						src={url}
						alt={`Picture of ${indv.person.name}`}
						width={200}
						height={200}
						layout='responsive'
					/>
					<div className="button-wrapper flex flex-row justify-center items-center absolute w-full h-full top-0 left-0  opacity-0 z-20  transition-opacity group-hover:opacity-100">
						<div className="w-10/12">
							{newBtns.map((button, i) => {
								button.additionalClass = 'm-5'
								return (
									<PortableButton key={`btn-${i}`} content={button}	/>
								)
							})}
						</div>
						<div className="absolute w-full h-full top-0 left-0 bg-custom-primary opacity-90 z-[-1] ">
						</div>
					</div>
				</div>

				<div className="person-info bg-custom-highlight flex-1 justify-center align-center flex flex-col py-5">
					<div className="flex flex-col text-center  justify-center items-center text-custom-secondary">
						<span className="text-2xl font-bold  mb-1 px-4">{indv.person.name}</span>
						<span className="text-custom-text opacity-80 font-gaegu text-sm uppercase mb-4">{indv.source}</span>
						<span className="text-3xl tracking-tight font-bold uppercase ">${netWorth}B</span>
					</div>
					
				</div>
			</div>
		
			
		</div>
	);
}
 
export default RichPerson ;