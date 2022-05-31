import { useEffect, useState, useRef } from 'react'

const PersonWealth = ({isPositive, change}) => {

	const [colour, setColour] = useState(null) 

	useEffect(()=>{

		if(isPositive){
			setColour('#13F352')
		}else{
			setColour('#F31313')
		}

	},[isPositive])



	if(colour === null || change.actualValue === 0){
		return(
			<div></div>
		)
	}
	else{
		return (
			<div className=" z-30  h-10 flex flex-row gap-2 justify-center items-center">

				<div className="" style={{
						transform: isPositive ? 'rotate(0deg)' : 'rotate(180deg)',
					}}>
					<svg  width="12" height="10" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" 
					style={{
						fill: colour
					}}>
						<path d="M9.0001 0L17.6604 15H0.339844L9.0001 0Z"/>
					</svg>
				</div>
				<span className="text-custom-secondary text-md font-gaegu uppercase" style={{
						color: colour
					}}>{change.shortValue}</span>
			</div>
		)
	}
}
	
 
export default PersonWealth ;