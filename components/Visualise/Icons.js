import { useEffect, useState } from 'react';

const Icons = ({ data }) => {


	const outputBoxes = (numToLoop) => {
		let num = 10000;
		let boxBase = 1000;
		let boxes = [];

		let string = '';


		let i = 0;

		const { raw } = { ...numToLoop }
		
		const rawFloor = Math.floor(raw);
		const rawCeil = Math.ceil(raw);

		let isPartial = false;

		// if (raw !== rawFloor) {
		// 	isPartial = true
		// }

		const remainder = ((raw - rawFloor).toFixed(2));
		const coverAmount = (remainder * 100)
		

		if (remainder > 0) {
			isPartial = true
		}



		while (i < raw) {
		
			let content = data?.unitIcon;

			if (isPartial && i === rawFloor) {
				// lineheight is the most consistent way of hiding/showing the correct amount of the emoji which are variable heights
				content = <div  key={i} className="overflow-hidden hide-partial relative " style={{display:`ruby`}} ><span className="overflow-hidden  relative bottom-0 bg-custom-faded inline-block"  style={{lineHeight:`${coverAmount}%`}}>{data?.unitIcon}</span></div>
			}

			boxes.push(
				content
			)
			i++
		}

		return boxes;

	}
	const [test, updateTest] = useState(<div>Loading...</div>);

	useEffect(() => {

		updateTest(outputBoxes(data?.numOfUnits))

		
	}, [data]);

	return (
		<div className="relative  w-full flex flex-row flex-wrap justify-center items-center" data-total-num={data?.numOfUnits?.raw}>
			<span className='tracking-[.5em] text-sm text-center ' style={{lineHeight: 'calc(100% + .8em)'}}>{test}</span>
			
		</div>
	);
}
 
export default Icons;
