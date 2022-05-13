
// import { useEffect, useState } from 'react';


const Icons = ({ content }) => {

	
	return (
		<>
			{content.map((key, index) => (
				<div className="key flex flex-row justify-center items-center" key={`key-${index}`}>
					<div className="m-1">
						{key?.unitIcon}
					</div>
					<span className="m-1"> = {key?.uPerIcon?.display} {key?.isPlural ? key?.name?.plural : key?.name?.singular}  </span>
				</div>
			))}
		</>
	);
}
 
export default Icons; 