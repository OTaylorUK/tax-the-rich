import Image from "next/image";
import { PortableButton } from "./PortableContent";
import  {findAndReplaceHolder} from '../utils/globalFunc';
import { useEffect, useState, useRef } from 'react'

const WealthChange = ({isPositive, change}) => {

	const [colour, setColour] = useState(null) 

	useEffect(()=>{

		if(isPositive){
			setColour('#13F352')
		}else{
			setColour('#F31313')
		}

	},[isPositive])

	if(colour === null){
		return(
			<div>Loading...</div>
		)
	}
	else{
		return (
			<div className="absolute right-0 bottom-0  z-30 w-10 h-10 flex flex-row justify-center items-center">

				<div className="wrapper" style={{
						transform: isPositive ? 'rotate(0deg)' : 'rotate(180deg)',
					}}>
					<svg style={{
						transform: isPositive ? 'rotate(0deg)' : 'rotate(180deg)'
					}} width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M9.0001 0L17.6604 15H0.339844L9.0001 0Z" fill={colour}/>
					</svg>
				</div>

				<span className="text-custom-secondary text-md font-bold">{change.actualAmount}</span>
			</div>
		)
	}
}
	
 
export default WealthChange ;