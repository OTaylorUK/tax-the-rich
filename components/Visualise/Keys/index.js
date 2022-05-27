// import { useEffect, useState } from 'react';
import Icons from './Icons'
import Block from './Block'

const Keys = ({ keys, type }) => {


	if(keys === null){
		return (
			<div>loading...</div>
		)
	}else{
		return (
			< >

			<div className={`z-30 sticky top-20  container w-full flex flex-col flex-wrap bg-custom-faded justify-center items-center  text-lg py-10`}>
				<div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6  text-custom-secondary">
					{keys.map((key,i)=>{
						if(type === 'block'){
							return(
								<Block key={i} {...key} />
							)
						}else{
							return(
								<Icons key={i} {...key} />
							)
						}
					
						
					})}
				</div>
			</div>


				
			</>
		);
	}


}
 
export default Keys; 