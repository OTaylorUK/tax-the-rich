
// import { useEffect, useState } from 'react';


const Block = ({ content }) => {

	
	return (
		<>
			{content?.map((key, index) => (
				<div className="key flex-1 sm:flex-auto flex flex-col text-center sm:flex-row justify-center items-center" key={`key-${index}`}>
					{key?.visual}
					<span className="m-1">{key?.displayVal} </span>
				</div>
			))} 
		</>
	);
}
 
export default Block; 