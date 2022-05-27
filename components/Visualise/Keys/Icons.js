
// import { useEffect, useState } from 'react';


const Icons = ({ unitIcon, uPerIcon, displayName }) => {

	
	return (
		<>
			<div className="key flex-1 sm:flex-auto flex flex-col text-center sm:flex-row justify-center items-center font-gaegu">
				<div className={`m-1`}>{unitIcon}</div>
				<span className="m-1"> = {uPerIcon?.display} {displayName} </span>
			</div>

		</>
	);
}
 
export default Icons; 