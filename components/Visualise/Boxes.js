import { useEffect, useState } from 'react';
import Box from './Box';

const Boxes = ({ data, context }) => {


	if(data === null){
		return (
			<div>loading...</div>
		)
	}else{

		console.log(data.length);
		return (
			< >
				{data.map((box,i)=>{

					let isLast = false;
					if((i + 1) === data.length){
						isLast = true
					}
					return(
						<Box key={i} context={context} isLast={isLast} iteration={i} {... box}/>
					)
				})}
			</>
		);
	}

}
 
export default Boxes;
