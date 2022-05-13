// import { useEffect, useState } from 'react';


const Key = ({ keys }) => {



	
	return (
		<div className={`z-30 top-20 container flex flex-col flex-wrap  justify-center items-center sticky  py-10`}>
			<div className="flex flex-row flex-wrap justify-center items-center">
				{keys.map((key, index) => (
					<div className="key flex flex-row justify-center items-center" key={`key-${index}`}>
						<div className="m-1">
							{key?.visual}
						</div>
						<span className="m-1"> = {key?.units?.display} {key?.isPlural ? key?.name?.plural : key?.name?.singular}  </span>
					</div>
				))}
			</div>
		</div>
	);
}
 
export default Key;  