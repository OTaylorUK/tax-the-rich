
import { useEffect, useState } from 'react';

import { useThemeContext } from "../../../context/theme"


const Block = ({id, colour, displayVal}) => {

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
		<>
			<div className="key min-w-[45%] sm:min-w-0 flex-1 sm:flex-auto flex flex-col text-center sm:flex-row justify-center items-center font-gaegu" key={`key-${id}`}
			>
				<div className={`h-4 w-4 border `} 
				style={{
					backgroundColor: `${bgColour}`,
				}}
				></div>
				<span className="m-1 whitespace-nowrap"> = {displayVal} </span>
			</div>
		</>
	);
}
 
export default Block; 