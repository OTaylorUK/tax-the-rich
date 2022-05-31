import Image from "next/image";
import { PortableButton } from "./PortableContent";
import  {findAndReplaceHolder} from '../utils/globalFunc';
import { useEffect, useState, useRef } from 'react'
import PersonWealth from "./PersonWealth";

const RichPerson = ({indv, buttons}) => {


	const {	personName, bio, uid, wealthSource, wealth, imgUrl, rank, changeInWealth, positiveChange} = indv


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

		// let newText = findAndReplaceHolder({ replaceVals: findReplace, str: ogText })

		// // if do not match then findReplace has worked
		// if (ogText !== newText) {
		//   button?.portableButton?.[0]?.children?.[0].text = newText
		//   // must store the original value for when the select option is changed
		//   button.ogText = ogText
		// }

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

	const [colour, setColour] = useState('') 


	useEffect(()=>{

		if(positiveChange !== null){
			if(positiveChange){
				setColour('#13F352')
			}else if(!positiveChange){
				setColour('#F31313')
			}
		}
		

	},[positiveChange])


	return (
		<div className="flex flex-col xl:flex-row drop-shadow-md  group cursor-pointer  rounded-md relative bg-custom-highlight">

			<div className="absolute left-0 top-0  z-30 w-10 h-10 bg-custom-highlight flex justify-center items-center">
				<span className="text-custom-secondary text-md font-bold">{rank}</span>
			</div>

			<div className="image-wrapper m-w-[200px]  relative w-full " style={{flex: '0 1 20vw'}}>
				<Image
					className="z-10"
					src={imgUrl}
					alt={`Picture of ${personName}`}
					width={200}
					height={200}
					layout='responsive'
				/>
			</div>
				
			<div className="person-info p-6  flex-[min-content] flex flex-col justify-between  xl:justify-between align-center gap-6 text-left">
				
				<div className="flex flex-col xl:flex-row text-center xl:text-left items-center justify-between gap-4">
					<div className="flex flex-col items-left text-custom-secondary">
						<span className="text-2xl font-bold  ">{personName}</span>
						<span className="text-custom-text opacity-80 font-gaegu text-sm uppercase ">{wealthSource}</span>
					</div>


					<div className="flex flex-col text-center  justify-center items-center text-custom-secondary relative" style={{
						color: colour
					}}>
						<span className="text-3xl tracking-tight font-bold uppercase ">{wealth.shortValue}</span>
						<PersonWealth change={changeInWealth} isPositive={positiveChange} />
					</div>
				</div>

				<p className="text-sm hidden xl:block ">{bio}</p>
		
				<div className="button-wrapper flex flex-col xl:flex-row justify-center xl:justify-start items-center gap-4  w-full ">
					{newBtns.map((button, i) => {
						return (
							<PortableButton key={`btn-${i}`} content={{...button, additionalClass : 'w-full'}}	/>
						)
					})}
				</div>
				
			</div>
			
		
			
		</div>
	);
}
 
export default RichPerson ;