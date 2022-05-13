// import { useEffect, useState } from 'react';


const Toggle = ({ context }) => {


	
	
	return (
		<article className="flex justify-center items-center p-10">
			<button
			aria-label={context?.showLabels  ? 'Hide Labels' : 'Show Labels'}
			title={context?.showLabels ? 'Hide Labels' : 'Show Labels'}
			onClick={() => {
				context?.setShowLabels(!context?.showLabels)
			//   trackCustomEvent({ eventName: 'toggle-theme' })
			}}
			className={` h-full flex justify-center items-center gap-2 group`}
		>
			<div className="wrap form-check-input appearance-none w-[30px]  rounded-full float-left h-[17px] align-top  bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm relative ">
				<input className='opacity-0 w-0 h-0' type="checkbox" />
				<span className={`absolute h-[13px] w-[13px] top-[2px]  ${context?.showLabels ? 'translate-x-[13px]' :  ''} left-[2px] rounded-full bg-custom-primary transition-transform`}></span>
			</div>
			<span className='font-gaegu uppercase text-custom-secondary group-hover:text-custom-accent'> {context?.showLabels ? <span>Hide</span> :  <span>Show</span>} labels</span>
		</button>
		</article>
	);
}
 
export default Toggle; 