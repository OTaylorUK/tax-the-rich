import { useEffect, useState } from 'react';
import Box from './Box';

const Boxes = ({ data, context }) => {


	if(data === null){
		return (
			<div>loading...</div>
		)
	}else{
		return (
			< >
				{data.map((box,i)=>{
					return(
						<Box key={i} context={context} iteration={i} {... box}/>
					)
				})}
			</>
		);
	}

}
 
export default Boxes;
