// import { useEffect, useState } from 'react';
import Icons from './Icons'
import Block from './Block'

const Keys = ({ keys, type }) => {

	
	return (
		<div className={`z-30 ${type == 'icon' ? 'sticky top-20' : '' }  container w-full flex flex-col flex-wrap bg-custom-faded justify-center items-center  text-lg py-10`}>
			<div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6  text-custom-secondary">
				{type == 'icon' ? <Icons content={keys} /> : <Block content={keys} /> }
			</div>
		</div>
	);
}
 
export default Keys; 